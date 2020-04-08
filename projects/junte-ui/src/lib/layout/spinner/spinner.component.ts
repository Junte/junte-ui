import { Component, HostBinding, Input } from '@angular/core';
import { Size } from '../../core/enums/size';
import { PropertyApi } from '../../core/decorators/api';

@Component({
  selector: 'jnt-spinner',
  template: ''
})
export class SpinnerComponent {

  @HostBinding('attr.host') readonly host = 'jnt-spinner-host';

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  @PropertyApi({
    description: 'Spinner size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.small,
      Size.normal,
      Size.large]
  })
  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

}
