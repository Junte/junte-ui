import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JunteUiModule } from 'junte-ui';
import { SharedModule } from 'src/components/documentation/shared/shared.module';

import { StackTestComponent } from './stack-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JunteUiModule,
    SharedModule
  ],
  exports: [StackTestComponent],
  declarations: [StackTestComponent],
})
export class StackTestModule {
}
