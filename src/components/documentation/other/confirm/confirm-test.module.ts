import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrismModule } from '@ngx-prism/core';
import { JunteUiModule } from 'junte-ui';

import { ConfirmTestComponent } from './confirm-test.component';

@NgModule({
  imports: [
    CommonModule,
    JunteUiModule,
    PrismModule
  ],
  exports: [ConfirmTestComponent],
  declarations: [ConfirmTestComponent]
})
export class ConfirmTestModule {
}