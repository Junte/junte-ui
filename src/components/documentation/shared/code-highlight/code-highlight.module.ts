import { ObserversModule } from '@angular/cdk/observers';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { LinkModule } from 'junte-ui';
import { CodeHighlightComponent } from './code-highlight.component';
import { CommonModule } from '@angular/common';
import { PrismModule } from '@ngx-prism/core';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    LinkModule,
    ClipboardModule,
    ObserversModule
  ],
  exports: [CodeHighlightComponent],
  declarations: [CodeHighlightComponent],
  providers: [],
})
export class CodeHighlightModule {
}

