import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input, Output,
  QueryList
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { isEqual } from '../../core/utils/equal';
import { ChartIndicatorComponent } from './chart-indicator.component';

@Component({
  selector: 'jnt-chart',
  templateUrl: './chart.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChartComponent),
      multi: true
    }
  ]
})
export class ChartComponent implements ControlValueAccessor, AfterContentInit {

  @HostBinding('attr.host') readonly host = 'jnt-chart-host';

  ui = UI;

  private _selected: number;
  private _widthMark = 100;

  progress = {loading: false};
  indicators: ChartIndicatorComponent[] = [];

  @Input() keyField: string;

  @PropertyApi({
    description: 'Title of the charts group',
    type: 'string'
  })
  @Input() title: string;

  @PropertyApi({
    description: 'Name of metric for the charts',
    type: 'string'
  })
  @Input() metric: string;

  @ContentChildren(ChartIndicatorComponent)
  indicatorsComponents: QueryList<ChartIndicatorComponent>;

  @Input() heightIndicator = 55;

  @Input() widthPoligon = 50;

  onChange: (value: any) => void = () => this.logger.error('value accessor is not registered');
  onTouched: () => void = () => this.logger.error('value accessor is not registered');
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched = fn => this.onTouched = fn;
  @HostListener('blur') onBlur = () => this.onTouched();

  @Output('selected')
  updated = new EventEmitter<any>();

  @Input()
  set widthMark(width: number) {
    this._widthMark = Math.min(width, 60);
  }

  get widthMark() {
    return this._widthMark;
  }

  set selected(value: any) {
    let isSame: boolean;
    if (!!this.keyField && !!this._selected && !!value) {
      isSame = this._selected[this.keyField] === value[this.keyField];
    } else {
      isSame = isEqual(this._selected, value);
    }

    this._selected = !isSame ? value : null;
    this.onChange(!!this._selected
      ? (!!this.keyField ? this._selected[this.keyField] : this._selected)
      : null);
    this.updated.emit(this._selected);
  }

  get selected() {
    return this._selected;
  }

  get heightSvg() {
    return this.heightIndicator + (this.heightIndicator * this.indicators.length);
  }

  constructor(private logger: NGXLogger) {
  }

  ngAfterContentInit() {
    this.indicators = this.indicatorsComponents.toArray();
    this.indicatorsComponents.changes
      .subscribe((indicators: QueryList<ChartIndicatorComponent>) => this.indicators = indicators.toArray());
  }

  writeValue(value: any): void {
    this._selected = value;
  }

  trackByFn(index, indicator) {
    return indicator.data.id || index;
  }
}
