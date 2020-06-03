import { Component, ElementRef, ViewChild } from '@angular/core';
import { InformerComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-informer-test',
  templateUrl: './informer-test.component.html',
  styleUrls: ['./informer-test.component.scss']
})
export class InformerTestComponent {

  ui = UI;
  localUi = LocalUI;
  types = {informer: InformerComponent};
  errors: string[] = [];

  @ViewChild('page', {read: ElementRef, static: false})
  backdrop: ElementRef<HTMLElement>;

  add() {
    this.errors.push('Authorization error');
  }
}