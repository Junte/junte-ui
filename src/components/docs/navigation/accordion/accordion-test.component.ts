import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UI } from 'junte-ui';
import { AccordionSectionComponent, TabComponent } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';
import {Language} from '../../../../enums/language';

@Component({
  selector: 'app-accordion-test',
  templateUrl: './accordion-test.component.html',
  styleUrls: ['./accordion-test.component.scss']
})
export class AccordionTestComponent implements OnInit {


  ui = UI;
  localUi = LocalUI;
  language = Language;
  types = {section: AccordionSectionComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/collections/accordion';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=6587%3A0';

  @ViewChild('code') code: TabComponent;

  iconControl = this.fb.control(true);
  stateControl = this.fb.control(null);

  builder = this.fb.group({
    icon: this.iconControl,
    state: this.stateControl
  });

  constructor(private fb: FormBuilder,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
