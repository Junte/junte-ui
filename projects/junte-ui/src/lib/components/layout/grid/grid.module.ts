import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { en } from '../../../i18n/en';
import { ColComponent } from './col/col.component';
import { ContainerComponent } from './container/container.component';
import { RowComponent } from './row/row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContainerComponent,
    RowComponent,
    ColComponent
  ],
  entryComponents: [
    ContainerComponent,
    RowComponent,
    ColComponent
  ],
  exports: [
    ContainerComponent,
    RowComponent,
    ColComponent
  ]
})
export class GridModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<GridModule> {
    return {
      ngModule: GridModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        },
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: I18nLoaderFactory,
            deps: [JunteUIModuleConfig]
          },
          defaultLanguage: 'en'
        }).providers
      ]
    };
  }

}
