import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { en } from '../../core/i18n/en';
import { IconModule } from '../../elements/icon/icon.module';
import { SwitchComponent } from './switch.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ReactiveFormsModule
  ],
  exports: [
    SwitchComponent
  ],
  entryComponents: [
    SwitchComponent
  ],
  declarations: [
    SwitchComponent
  ]
})
export class SwitchModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<SwitchModule> {
    return {
      ngModule: SwitchModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}