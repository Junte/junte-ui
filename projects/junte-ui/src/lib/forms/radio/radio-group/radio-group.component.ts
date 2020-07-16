import {
  AfterViewInit,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  QueryList,
  ViewChildren
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { Size } from '../../../core/enums/size';
import { UI } from '../../../core/enums/ui';
import { RadioComponent } from '../radio.component';

@Component({
  selector: 'jnt-radio-group',
  templateUrl: './radio-group.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true
    }
  ]
})

export class RadioGroupComponent implements AfterViewInit, ControlValueAccessor {

  private disabled = false;
  private selected: any;

  _size = Size.normal;

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-radio-group-host';

  @Input() labelField: string;
  @Input() valueField: string;

  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  get size() {
    return this._size;
  }

  @ViewChildren(RadioComponent)
  items: QueryList<RadioComponent>;

  @ContentChildren(RadioComponent, {descendants: true})
  radios: QueryList<RadioComponent>;

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  constructor(private logger: NGXLogger) {
  }

  ngAfterViewInit() {
    this.transformationRadio();
    this.updateDisabled();
  }

  private transformationRadio() {
    this.radios.forEach(item => {
      if (typeof item.value === 'object') {
        item.label = item.value[this.labelField];
        item.value = item.value[this.valueField];
      }
    });
    this.updateChecked();
  }

  private updateChecked() {
    if (!!this.items) {
      this.items.forEach(item => item.checked = item.value === this.selected);
    }
  }

  private updateDisabled() {
    if (!!this.items) {
      this.items.forEach(item => item.disabled = this.disabled);
    }
  }

  select(value) {
    this.selected = value || null;
    this.updateChecked();
    this.onChange(value);
  }

  writeValue(value: any) {
    this.selected = value || null;
    this.updateChecked();
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.updateDisabled();
  }
}
