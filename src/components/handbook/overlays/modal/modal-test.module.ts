import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ButtonModule,
  CalendarModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  ModalModule,
  SelectModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { ModalTestComponent } from './modal-test.component';
import { ModalTestFactoryComponent } from './test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccordionModule,
    StackModule,
    IconModule,
    LinkModule,
    GridModule,
    TabsModule,
    ButtonModule,
    SelectModule,
    FormModule,
    SharedModule,
    SwitcherModule,
    CheckboxModule,
    CalendarModule,
    ModalModule,
    AppLayoutModule
  ],
  exports: [
    ModalTestComponent,
    ModalTestFactoryComponent
  ],
  declarations: [
    ModalTestComponent,
    ModalTestFactoryComponent
  ]
})
export class ModalTestModule {
}
