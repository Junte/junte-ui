import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  BlockModule,
  ButtonModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  InformerModule,
  LinkModule,
  SelectModule,
  SkeletonModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from 'src/components/docs/shared/shared.module';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { InformerTestComponent } from './informer-test.component';
import { AnalyticsDirectivesModule } from 'src/directives/analytics.module';

@NgModule({
  declarations: [InformerTestComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InformerModule.forRoot(JUNTE_UI_CONFIG),
        IconModule.forRoot(JUNTE_UI_CONFIG),
        LinkModule.forRoot(JUNTE_UI_CONFIG),
        StackModule.forRoot(JUNTE_UI_CONFIG),
        TabsModule.forRoot(JUNTE_UI_CONFIG),
        GridModule.forRoot(JUNTE_UI_CONFIG),
        FormModule.forRoot(JUNTE_UI_CONFIG),
        AccordionModule.forRoot(JUNTE_UI_CONFIG),
        GridModule.forRoot(JUNTE_UI_CONFIG),
        SkeletonModule.forRoot(JUNTE_UI_CONFIG),
        ButtonModule.forRoot(JUNTE_UI_CONFIG),
        SelectModule.forRoot(JUNTE_UI_CONFIG),
        SwitcherModule.forRoot(JUNTE_UI_CONFIG),
        BlockModule.forRoot(JUNTE_UI_CONFIG),
        CheckboxModule.forRoot(JUNTE_UI_CONFIG),
        SharedModule,
        InformerModule,
        AnalyticsDirectivesModule
    ],
  exports: [InformerTestComponent]
})
export class InformerTestModule {
}
