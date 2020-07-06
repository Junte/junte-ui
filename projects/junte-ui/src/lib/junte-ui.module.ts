import { ModuleWithProviders, NgModule } from '@angular/core';
import { SelectableModule } from './core/directives/selectable';
import { CollectionsModule } from './collections/collections.module';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from './config';
import { ArrayPipesModule } from './core/pipes/array-pipes.module';
import { ColorPipesModule } from './core/pipes/color-pipes.module';
import { TextPipesModule } from './core/pipes/text-pipes.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { ElementsModule } from './elements/elements.module';
import { UiFormsModule } from './forms/forms.module';
import { LayoutModule } from './layout/layout.module';
import { NavigationModule } from './navigation/navigation.module';
import { OverlaysModule } from './overlays/overlays.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  exports: [
    SharedModule,

    LayoutModule,
    NavigationModule,
    ElementsModule,
    UiFormsModule,
    CollectionsModule,
    OverlaysModule,
    DynamicModule,
    ArrayPipesModule,
    ColorPipesModule,
    TextPipesModule,
    SelectableModule
  ]
})
export class JunteUiModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<JunteUiModule> {
    return {
      ngModule: JunteUiModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        },
        ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
