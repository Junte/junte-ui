import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createModule, JunteUIModuleConfig } from './config';
import { CollectionsModule } from './components/collections/collections.module';
import { DynamicModule } from './components/dynamic/dynamic.module';
import { ElementsModule } from './components/elements/elements.module';
import { UiFormsModule } from './components/forms/forms.module';
import { GeneralModule } from './components/general/general.module';
import { LayoutModule } from './components/layout/layout.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { OverlaysModule } from './components/overlays/overlays.module';
import { SharedModule } from './components/shared/shared.module';
import { JUNTE_UI_I18N_KEYS } from './i18n/consts';
import { en } from './i18n/en';
import { I18nLoader } from './i18n/loader';
import { AnimationPipeModule } from './pipes/animation-pipe.module';
import { ArrayPipeModule } from './pipes/array-pipe.module';
import { ColorPipesModule } from './pipes/color-pipes.module';
import { ConvertionPipeModule } from './pipes/convertion-pipe.module';
import { DatePipeModule } from './pipes/date-pipe.module';
import { TextPipeModule } from './pipes/text-pipe.module';

@NgModule({
  exports: [
    GeneralModule,
    SharedModule,

    LayoutModule,
    NavigationModule,
    ElementsModule,
    UiFormsModule,
    CollectionsModule,
    OverlaysModule,
    DynamicModule,

    AnimationPipeModule,
    ArrayPipeModule,
    ColorPipesModule,
    ConvertionPipeModule,
    DatePipeModule,
    TextPipeModule
  ]
})
export class JunteUiModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<JunteUiModule> {
    return createModule(JunteUiModule, config);
  }

}
