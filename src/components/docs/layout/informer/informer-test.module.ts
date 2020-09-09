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


@NgModule({
  declarations: [InformerTestComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InformerModule,
        IconModule,
        LinkModule,
        StackModule,
        TabsModule,
        GridModule,
        FormModule,
        AccordionModule,
        GridModule,
        SkeletonModule,
        ButtonModule,
        SelectModule,
        SwitcherModule,
        BlockModule,
        CheckboxModule,
        SharedModule,
        InformerModule
    ],
  exports: [InformerTestComponent]
})
export class InformerTestModule {
}
