import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AfterPipe } from './gantt-pipes/after.pipe';
import { BeforePipe } from './gantt-pipes/before.pipe';
import { FullMonthPipe } from './gantt-pipes/full-month.pipe';
import { DatesInMonthPipe } from './gantt-pipes/dates-in-month.pipe';
import { YearAfterPipe } from './gantt-pipes/year-after.pipe';
import { YearBeforePipe } from './gantt-pipes/year-before.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AfterPipe,
    BeforePipe,
    FullMonthPipe,
    DatesInMonthPipe,
    YearAfterPipe,
    YearBeforePipe
  ],
  exports: [
    AfterPipe,
    BeforePipe,
    FullMonthPipe,
    DatesInMonthPipe,
    YearAfterPipe,
    YearBeforePipe
  ]
})
export class GanttPipesModule {
}