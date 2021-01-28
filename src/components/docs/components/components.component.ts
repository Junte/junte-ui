import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {

  ui = UI;
  localUi = LocalUI;
  handbook = HANDBOOK;

  constructor(public router: Router,
              public route: ActivatedRoute) {
  }
}
