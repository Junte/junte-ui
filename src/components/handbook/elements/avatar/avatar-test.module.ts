import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    AppLayoutModule,
    ArrayPipesModule,
    AvatarModule,
    BlockModule,
    CheckboxModule,
    DotModule,
    FormModule,
    GridModule,
    IconModule,
    LinkModule,
    SelectModule,
    StackModule,
    SwitcherModule,
    TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { AvatarTestComponent } from './avatar-test.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,

        IconModule,
        LinkModule,
        StackModule,
        TabsModule,
        SwitcherModule,
        GridModule,
        BlockModule,
        AvatarModule,
        FormModule,
        AccordionModule,
        SelectModule,
        CheckboxModule,
        DotModule,
        ArrayPipesModule,
        SharedModule,
        AppLayoutModule
    ],
  exports: [
    AvatarTestComponent
  ],
  declarations: [
    AvatarTestComponent
  ],
})
export class AvatarTestModule {
}

