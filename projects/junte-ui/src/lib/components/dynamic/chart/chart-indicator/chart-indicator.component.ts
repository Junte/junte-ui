import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../../../decorators/api';

@Component({
  selector: 'jnt-chart-indicator',
  template: ``,
})
export class ChartIndicatorComponent implements OnInit {

  @PropertyApi({
    description: 'Label name of chart item indicator',
    type: 'string'
  })
  @Input() label: string;
  @PropertyApi({
    description: 'Value of chart item indicator',
    type: 'number'
  })
  @Input() value: number;
  @PropertyApi({
    description: 'Title name of chart item indicator',
    type: 'string'
  })
  @Input() title: string;
  @PropertyApi({
    description: 'Set the color to \'red\' | \'green\' | \'blue\' or other custom colors (css color) for chart item',
    type: 'string | Color'
  })
  @Input() color: string;
  @PropertyApi({
    description: 'Data of chart item indicator',
    type: 'any'
  })
  @Input() data: any;

  @ContentChild('titleTemplate')
  titleTemplate: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
