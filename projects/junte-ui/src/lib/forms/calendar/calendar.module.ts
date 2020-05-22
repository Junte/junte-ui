import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DateFnsModule } from 'ngx-date-fns';
import { ButtonModule } from '../button/button.module';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { DatePipesModule } from '../../core/pipes/date-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { CalendarComponent } from './calendar.component';
import { WeekMetricComponent } from './week/week-metric.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IconModule,
    DatePipesModule,
    StackModule,
    DateFnsModule,
    ArrayPipesModule,
    ButtonModule
  ],
  declarations: [
    CalendarComponent,
    WeekMetricComponent
  ],
  entryComponents: [
    CalendarComponent,
    WeekMetricComponent
  ],
  exports: [
    CalendarComponent,
    WeekMetricComponent
  ],
  providers: [...JUNTE_MODULE_PROVIDES]
})
export class CalendarModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<CalendarModule> {
    return {
      ngModule: CalendarModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }
      ]
    };
  }

}
