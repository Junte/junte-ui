import { Component, ContentChildren, forwardRef, HostBinding, Input, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PropertyApi } from '../../core/decorators/api';
import { Orientation } from '../../core/enums/orientation';
import { UI } from '../../core/enums/ui';
import { isEqual } from '../../core/utils/equal';
import { SelectMode } from '../select/enums';
import { SwitcherOptionComponent } from './switcher-option.component';

@Component({
  selector: 'jnt-switcher',
  templateUrl: './switcher.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitcherComponent),
      multi: true
    }
  ]
})
export class SwitcherComponent implements ControlValueAccessor {

  @HostBinding('attr.host') readonly host = 'jnt-switcher-host';

  ui = UI;
  selectMode = SelectMode;

  @HostBinding('attr.data-orientation')
  _orientation: Orientation = Orientation.horizontal;

  @PropertyApi({
    description: 'Switcher orientation ',
    path: 'ui.orientation',
    default: Orientation.horizontal,
    options: [Orientation.horizontal, Orientation.vertical]
  })
  @Input() set orientation(type: Orientation) {
    this._orientation = type || Orientation.horizontal;
  }

  @PropertyApi({
    description: 'Set disabled state',
    type: 'boolean',
    default: 'false',
  })
  @HostBinding('attr.data-disabled')
  @Input()
  disabled = false;

  @PropertyApi({
    description: 'Select key field',
    type: 'string',
    default: 'key'
  })
  @Input() keyField: string;

  @HostBinding('attr.data-mode')
  _mode: SelectMode = SelectMode.single;

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
    description: 'Select allow empty',
    type: 'boolean',
    default: 'true'
  })
  @HostBinding('attr.data-allow-empty')
  @Input() allowEmpty = true;

  @PropertyApi({
    description: 'Display marks',
    type: 'boolean',
    default: 'true'
  })
  @HostBinding('attr.data-allow-empty')
  @Input() marks = false;

  @ContentChildren(SwitcherOptionComponent)
  options: QueryList<SwitcherOptionComponent>;

  selected: any[] = [];

  version = 0;

  writeValue(value: any | any[]) {
    this.selected = !!value ? Array.isArray(value) ? value : [value] : [];
  }

  onChange(value: any) {
  }

  onTouched() {
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  select(value: any) {
    switch (this.mode) {
      case SelectMode.single:
        const current = this.selected.length > 0 ? this.selected[0] : null;
        if (!!current) {
          const same = !!this.keyField
            ? current[this.keyField] === value[this.keyField]
            : isEqual(current, value);
          if (same && !this.allowEmpty) {
            return;
          }

          this.selected = same ? [] : [value];
          this.onChange(same ? null : value);
        } else {
          this.selected = [value];
          this.onChange(value);
        }

        this.version++;
        break;
      case SelectMode.multiple:
        const index = !!this.keyField
          ? this.selected.indexOf(value[this.keyField])
          : this.selected.findIndex(e => isEqual(e, value));
        if (index !== -1) {
          this.selected.splice(index, 1);
        } else {
          this.selected.push(value);
        }
        this.version++;
        this.onChange(this.selected);
        break;
    }
  }

}
