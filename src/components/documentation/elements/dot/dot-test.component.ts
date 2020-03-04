import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DotComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-dot-test',
  templateUrl: './dot-test.component.html',
  styleUrls: ['./dot-test.component.scss']
})
export class DotTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {dot: DotComponent};

  @ViewChild('code') code: TabComponent;

  colorControl = this.fb.control(UI.color.orange);

  builder = this.fb.group({
    color: this.colorControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}