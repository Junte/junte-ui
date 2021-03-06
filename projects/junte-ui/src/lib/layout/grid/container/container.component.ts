import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
import { Width } from '../../../core/enums/width';

@Component({
  selector: 'jnt-container',
  templateUrl: './container.encapsulated.html'
})
export class ContainerComponent {

  @HostBinding('attr.host') readonly host = 'jnt-container-host';

  @HostBinding('attr.data-width')
  _width = Width.default;

  @PropertyApi({
    description: 'Container width',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default, Width.fluid]
  })

  @Input() set width(width: Width) {
    this._width = width || Width.default;
  }

}
