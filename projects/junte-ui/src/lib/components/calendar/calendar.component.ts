import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { WeekMetricComponent } from './week/week-metric.component';
import { Period } from './models';
import { today } from './utils';
import {
  addDays,
  addMonths,
  addWeeks,
  format,
  isEqual,
  setDay,
  setMonth,
  setYear,
  startOfMonth,
  startOfWeek,
  subMonths
} from 'date-fns';

const WEEKS_DISPLAYED = 5;
const DAYS_IN_WEEK = 7;

@Component({
  selector: 'jnt-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    }
  ]
})
export class CalendarComponent implements ControlValueAccessor, AfterContentInit, OnInit {

  private year$ = new Subject<number>();
  private month$ = new BehaviorSubject<number>(0);
  private _period: Date;

  current: Date = today();
  metrics: WeekMetricComponent[] = [];
  weeks = [];

  @ContentChildren(WeekMetricComponent)
  metricsComponent: QueryList<WeekMetricComponent>;

  @ContentChild('dayTemplate')
  dayTemplate: TemplateRef<any>;

  @ContentChild('metricTemplate')
  metricTemplate: TemplateRef<any>;

  @Output()
  updated = new EventEmitter<Period>();

  @Input()
  set year(year: number) {
    this.year$.next(year);
  }

  @Input()
  set month(month: number) {
    this.month$.next(month);
  }

  set period(period: Date) {
    this._period = period;
    this.update();
  }

  get period() {
    return this._period;
  }

  format = format;
  addMonths = addMonths;
  subMonths = subMonths;
  isEqual = isEqual;

  onChange: (date: Date) => void;

  constructor() {
    combineLatest(this.year$, this.month$)
      .pipe(filter(([year, month]) => !!year && !!month))
      .subscribe(([year, month]) =>
        this.period = setDay(setMonth(setYear(new Date(), year), month), 1, {weekStartsOn: 1})
      );
  }

  ngAfterContentInit() {
    this.metrics = this.metricsComponent.toArray();
    this.metricsComponent.changes.subscribe(m => this.metrics = m.toArray());
  }

  ngOnInit() {
    this.period = startOfMonth(this.current);
  }

  writeValue(date: Date): void {
    this.current = date;
  }

  registerOnChange(callback: (date: Date) => void): void {
    this.onChange = (date: Date) => {
      if (!isEqual(date, this.current)) {
        this.current = date;
        callback(date);
      }
    };
  }

  registerOnTouched(fn): void {
  }

  private update() {
    const start = format(startOfWeek(this.period, {weekStartsOn: 1}));
    let date = start;
    this.weeks = [];
    for (let i = 0; i < WEEKS_DISPLAYED; i++) {
      this.weeks[i] = {days: [], date: date};
      for (let j = 0; j < DAYS_IN_WEEK; j++) {
        this.weeks[i].days[j] = format(addDays(date, j));
      }
      date = format(addWeeks(date, 1));
    }
    this.updated.emit({start: new Date(start), end: new Date(date)});
  }

}
