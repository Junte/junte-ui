import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ButtonModule,
  AccordionModule,
  AvatarModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  InputModule,
  LabelModule,
  LinkModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { SelectTestComponent } from './select-test.component';
import { AnalyticsDirectivesModule } from 'src/directives/analytics.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule.forRoot(JUNTE_UI_CONFIG),
    IconModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    SelectModule.forRoot(JUNTE_UI_CONFIG),
    AvatarModule.forRoot(JUNTE_UI_CONFIG),
    SharedModule,
    CheckboxModule.forRoot(JUNTE_UI_CONFIG),
    InputModule.forRoot(JUNTE_UI_CONFIG),
    LabelModule.forRoot(JUNTE_UI_CONFIG),
    AnalyticsDirectivesModule
  ],
  exports: [
    SelectTestComponent
  ],
  declarations: [
    SelectTestComponent
  ],
})
export class SelectTestModule {
}
