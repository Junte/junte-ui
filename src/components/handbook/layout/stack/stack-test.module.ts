import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ArrayPipesModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { StackTestComponent } from './stack-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    AccordionModule,
    SelectModule,
    GridModule,
    SharedModule,
    ArrayPipesModule,
    AppLayoutModule
  ],
  exports: [
    StackTestComponent
  ],
  declarations: [
    StackTestComponent
  ],
})
export class StackTestModule {
}
