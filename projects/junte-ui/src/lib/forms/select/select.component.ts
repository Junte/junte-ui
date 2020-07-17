import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef, EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input, OnDestroy,
  OnInit, Output,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, takeWhile, tap } from 'rxjs/operators';
import { Breakpoint } from '../../core/enums/breakpoint';
import { BreakpointService } from '../../layout/responsive/breakpoint.service';
import { PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';
import { PopoverComponent, PopoverOptions } from '../../overlays/popover/popover.component';
import { PopoverService } from '../../overlays/popover/popover.service';
import { SelectMode } from './enums';
import { IOption, Key, Options } from './model';

const MIN_WIDTH = 20;
const CHAR_WIDTH = 8;

@Component({
  selector: 'jnt-select-option',
  template: ''
})
export class SelectOptionComponent {

  ui = UI;

  @Input() icon: string;
  @Input() key: Key;
  @Input() label: string;
  @Input() value: any;

}

const SEARCH_DELAY = 100;

@Component({
  selector: 'jnt-select',
  templateUrl: './select.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, AfterContentInit, OnDestroy, ControlValueAccessor {

  @HostBinding('attr.host') readonly host = 'jnt-select-host';

  private reference: { popover: PopoverComponent } = {popover: null};
  private destroyed = false;

  ui = UI;
  selectMode = SelectMode;

  get mobile() {
    return this.breakpoint.current === Breakpoint.mobile;
  }

  private _opened = false;
  private fetcher: Subscription;

  options: Options = {persisted: {}, found: {}};
  changes = {selected: 0, options: 0};
  selected: Key[] = [];
  loading: boolean;

  queryControl = this.fb.control({value: null, disabled: true});
  form = this.fb.group(
    {
      query: this.queryControl
    }
  );

  @PropertyApi({
    description: 'Select label field',
    type: 'string',
    default: 'label'
  })
  @Input() labelField = 'label';

  @PropertyApi({
    description: 'Select key field',
    type: 'string',
    default: 'key'
  })
  @Input() keyField = 'key';

  @PropertyApi({
    description: 'Select placeholder',
    type: 'string',
    default: 'key'
  })
  @Input() placeholder = '';

  @PropertyApi({
    description: 'Select required',
    type: 'boolean',
    default: 'false'
  })
  @Input() required = false;

  @HostBinding('attr.data-mode')
  _mode: SelectMode = SelectMode.single;

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @PropertyApi({
    description: 'Select label',
    type: 'string'
  })
  @Input()
  label: string;

  @PropertyApi({
    description: 'Select allow empty',
    type: 'boolean',
    default: 'true'
  })
  @HostBinding('attr.data-allow-empty')
  @Input()
  allowEmpty = true;

  @PropertyApi({
    description: 'Icon for select',
    type: 'string',
  })
  @Input() icon: string;

  @ViewChild('queryInput', {static: true})
  queryInput: ElementRef<HTMLInputElement>;

  @ViewChild('selectedList', {static: true})
  selectedList: ElementRef<HTMLUListElement>;

  @ViewChild('query')
  query: ElementRef<HTMLInputElement>;

  @PropertyApi({
    description: 'Template for option',
    type: 'TemplateRef<any>'
  })
  @Input()
  optionTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Template for empty options',
    type: 'TemplateRef<any>'
  })
  @Input()
  emptyOptionsTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Template for options header',
    type: 'TemplateRef<any>'
  })
  @Input()
  optionsHeaderTemplate: TemplateRef<any>;

  @ContentChildren(SelectOptionComponent)
  optionsFromMarkup: QueryList<SelectOptionComponent>;

  @ViewChild('optionsTemplate') optionsTemplate: TemplateRef<any>;

  @Output('selected')
  updated = new EventEmitter<any>();

  @HostBinding('attr.data-opened')
  set opened(opened: boolean) {
    this._opened = opened;
    if (!opened) {
      this.queryControl.setValue(null);
    }
    const input = this.queryInput.nativeElement;
    const checking = () => {
      const style = getComputedStyle(input);
      if (style.display !== 'none') {
        if (opened) {
          input.focus();
        }
      } else {
        setTimeout(() => checking(), 100);
      }
    };
    setTimeout(() => checking(), 100);
    if (!this.mobile) {
      if (opened) {
        this.reference.popover = this.popover.show(this.hostRef, new PopoverOptions({
          contentTemplate: this.optionsTemplate,
          features: [Feature.dropdown]
        }));
        this.popover.updated.pipe(takeWhile((() => !this.destroyed)), filter(t => !!t && t !== this.hostRef))
          .subscribe(() => this.opened = false);
      } else {
        this.popover.hide(this.hostRef);
        this.reference.popover = null;
      }
    }
  }

  get opened() {
    return this._opened;
  }

  @PropertyApi({
    description: 'Select mode',
    path: 'ui.select',
    default: SelectMode.single,
    options: [SelectMode.single, SelectMode.multiple]
  })
  @Input() set mode(mode: SelectMode) {
    this._mode = mode || SelectMode.single;
  }

  get mode() {
    return this._mode;
  }

  @PropertyApi({
    description: 'Select search',
    type: 'boolean'
  })
  @HostBinding('attr.data-search')
  @Input() set search(search: boolean) {
    search ? this.queryControl.enable() : this.queryControl.disable();
  }

  get search() {
    return !this.queryControl.disabled;
  }

  @HostBinding('attr.data-disabled')
  @Input()
  disabled = false;

  @PropertyApi({
    description: 'Select size',
    path: 'ui.sizes',
    default: Size.normal,
    options: [Size.tiny, Size.small, Size.normal, Size.large]
  })
  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

  @HostBinding('attr.data-empty')
  get empty() {
    return this.selected.length === 0;
  }

  @PropertyApi({
    description: 'Select loader',
    type: 'function'
  })
  @Input() loader = null;

  @HostListener('document:click', ['$event.path'])
  clickOutside(path: HTMLElement[]) {
    if (!!this.reference.popover && this.opened && !this.picked(path) && !this.reference.popover.picked(path)) {
      this.opened = false;
    }
  }

  @HostListener('click', ['$event'])
  focused({target}: { target: HTMLElement, path: HTMLElement[] }) {
    switch (this.mode) {
      case SelectMode.single:
        break;
      case SelectMode.multiple:
        if (target === this.selectedList.nativeElement) {
          this.opened = true;
        }
        break;
    }
  }

  @HostListener('blur')
  blurred() {
    this.onTouched();
  }

  close() {
    this.opened = false;
  }

  onChange: (value: Key | Key[]) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;

  constructor(private hostRef: ElementRef,
              private renderer: Renderer2,
              private fb: FormBuilder,
              private popover: PopoverService,
              private logger: NGXLogger,
              private breakpoint: BreakpointService) {
  }

  ngOnInit() {
    const loadOptions = (query: string) => {
      if (!!this.fetcher) {
        this.fetcher.unsubscribe();
      }

      if (!!this.loader) {
        this.fetcher = this.loader(query)
          .pipe(finalize(() => this.loading = false))
          .subscribe(objects => {
            this.options.found = {};
            objects.forEach((o, index) => {
              const key = o[this.keyField];
              if (!!key) {
                this.options.found[`${key}`] = {
                  index,
                  key,
                  label: o[this.labelField],
                  icon: o.icon,
                  value: o
                };
              }
            });
            this.changes.options++;
          });
      } else {
        this.options.found = {};
        let options = Object.values(this.options.persisted);
        options = options.filter(o => o.label.toLocaleLowerCase()
          .includes(query.toLocaleLowerCase()));
        options.forEach(option => this.options.found[option.key] = option);
        this.changes.options++;
      }
    };

    this.queryControl.valueChanges.pipe(distinctUntilChanged(),
      tap(query => {
        this.logger.debug('query has been changed');
        this.loading = !!query && !!this.loader;
        const input = this.queryInput.nativeElement;
        if (!!query && query.length > 0) {
          const width = Math.max((query.length + 1) * CHAR_WIDTH, MIN_WIDTH);
          this.renderer.setStyle(input, 'width', width + 'px');
        } else {
          this.renderer.removeStyle(input, 'width');
        }
      }),
      debounceTime(SEARCH_DELAY),
      filter(query => !!query))
      .subscribe(query => loadOptions(query));
  }

  ngAfterContentInit() {
    const convert = (options: SelectOptionComponent[]) => {
      this.options.persisted = {};
      options.forEach(({key, label, icon, value}, index) =>
        this.options.persisted[`${key}`] = {index, key, label, icon, value});
      this.changes.options++;
    };

    convert(this.optionsFromMarkup.toArray());
    this.optionsFromMarkup.changes.pipe(tap(() => this.logger.debug('options from markup changed')))
      .subscribe(options => convert(options.toArray()));
  }

  ngOnDestroy() {
    this.destroyed = true;
    if (!!this.reference.popover) {
      this.popover.hide(this.hostRef);
      this.reference.popover = null;
    }
  }

  private picked(elements: HTMLElement[]) {
    return elements.indexOf(this.hostRef.nativeElement) !== -1;
  }

  trackOption(index: number, option: IOption) {
    return option.key || index;
  }

  toggle(option: IOption) {
    this.selected.indexOf(option.key) === -1
      ? this.select(option) : this.remove(option.key);
  }

  select(option: IOption) {
    this.logger.debug('option is selected');
    this.options.persisted[`${option.key}`] = option;
    this.changes.options++;
    if (this.mode === SelectMode.multiple) {
      this.selected.push(option.key);
      if (!!this.reference.popover) {
        this.reference.popover.update();
      }
    } else {
      this.selected = [option.key];
      this.opened = false;
    }

    this.onChange(this.mode === SelectMode.multiple ? this.selected : option.key);
    this.updated.emit(option.value);
  }

  remove(key: Key) {
    const index = this.selected.findIndex(i => i === key);
    if (index !== -1) {
      this.logger.debug(`option ${index} has been removed`);
      this.selected.splice(index, 1);
      this.changes.selected++;
      this.onChange(this.mode === SelectMode.multiple ? this.selected : null);
    }
  }

  writeValue(value: Key | Key[]) {
    this.selected = (this.mode === SelectMode.single ? (!!value ? [value] : []) : value) as Key[];
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
