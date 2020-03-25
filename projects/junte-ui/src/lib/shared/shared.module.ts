import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../config';
import { ConfirmModule } from './confirm/confirm.module';
import { MessageModule } from './message/message.module';
import { ThemeSwitcherModule } from './theme-switcher/theme-switcher.module';

@NgModule({
  exports: [
    ConfirmModule,
    ThemeSwitcherModule,
    MessageModule
  ]
})
export class SharedModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
