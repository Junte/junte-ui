import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateFnsModule } from 'ngx-date-fns';
import { ArrayPipeModule } from '../../../pipes/array-pipe.module';
import { DatePipeModule } from '../../../pipes/date-pipe.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { GanttLineComponent } from './gantt-line/gantt-line.component';
import { GanttComponent } from './gantt.component';

@NgModule({
  declarations: [
    GanttComponent,
    GanttLineComponent
  ],
  imports: [
    CommonModule,
    DatePipeModule,
    DateFnsModule,
    ArrayPipeModule,
    IconModule,
    SkeletonModule,
    ButtonModule
  ],
  exports: [
    GanttComponent,
    GanttLineComponent
  ]
})
export class GanttModule {
}
