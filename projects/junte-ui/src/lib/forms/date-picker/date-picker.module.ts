import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { BlockModule } from '../../layout/block/block.module';
import { ResponsiveModule } from '../../layout/responsive/responsive.module';
import { StackModule } from '../../layout/stack/stack.module';
import { PopoverModule } from '../../overlays/popover/popover.module';
import { ButtonModule } from '../button/button.module';
import { CalendarModule } from '../calendar/calendar.module';
import { FormModule } from '../form/form.module';
import { InputModule } from '../input/input.module';
import { DatePickerComponent } from './date-picker.component';
import { StyleLeftPipe, StyleTopPipe, TimeFormatPipe } from './date-picker.pipes';

@NgModule({
  declarations: [
    DatePickerComponent,
    StyleTopPipe,
    StyleLeftPipe,
    TimeFormatPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModule,
    InputModule,
    CalendarModule,
    BlockModule,
    PopoverModule,
    ResponsiveModule,
    StackModule,
    PopoverModule,
    ArrayPipesModule,
    ButtonModule,
    IconModule
  ],
  entryComponents: [
    DatePickerComponent
  ],
  exports: [
    DatePickerComponent
  ]
})
export class DatePickerModule {
}
