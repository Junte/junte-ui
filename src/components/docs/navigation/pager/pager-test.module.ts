import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  ArrayPipesModule,
  BlockModule,
  FormModule,
  GridModule,
  LinkModule,
  StackModule,
  SwitcherModule,
  TabsModule,
  PagerModule,
  IconModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { PagerTestComponent } from './pager-test.component';
import { AnalyticsDirectivesModule } from 'src/directives/analytics.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    SwitcherModule.forRoot(JUNTE_UI_CONFIG),
    PagerModule.forRoot(JUNTE_UI_CONFIG),
    BlockModule.forRoot(JUNTE_UI_CONFIG),
    ArrayPipesModule,
    SharedModule,
    AnalyticsDirectivesModule
  ],
  exports: [
    PagerTestComponent
  ],
  declarations: [
    PagerTestComponent
  ],
})
export class PagerTestModule {
}
