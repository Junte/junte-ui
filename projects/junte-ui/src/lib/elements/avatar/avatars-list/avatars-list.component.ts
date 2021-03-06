import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
import { Size } from '../../../core/enums/size';
import { UI } from '../../../core/enums/ui';
import { AvatarComponent } from '../avatar.component';

@Component({
  selector: 'jnt-avatars-list',
  templateUrl: './avatars-list.encapsulated.html'
})
export class AvatarsListComponent {

  @HostBinding('attr.host') readonly host = 'jnt-avatars-list-host';

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  ui = UI;

  @Input()
  max = 5;

  @ContentChildren(AvatarComponent)
  avatars: QueryList<AvatarComponent>;

  @HostBinding('attr.data-capacity')
  get capacity() {
    return Math.min(this.avatars.length, this.max);
  }

  @PropertyApi({
    description: 'Avatars list size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.tiny, Size.small, Size.normal, Size.large]
  })
  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

  get size() {
    return this._size;
  }

}
