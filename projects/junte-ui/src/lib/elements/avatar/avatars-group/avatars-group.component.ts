import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
import { Size } from '../../../core/enums/size';
import { UI } from '../../../core/enums/ui';
import { AvatarComponent } from '../avatar.component';

const MAX_CAPACITY = 4;

@Component({
  selector: 'jnt-avatars-group',
  templateUrl: './avatars-group.encapsulated.html'
})
export class AvatarsGroupComponent {

  @HostBinding('attr.host') readonly host = 'jnt-avatars-group-host';

  @HostBinding('attr.data-size')
  _size: Size = Size.normal;

  _total = 0;

  ui = UI;
  max = MAX_CAPACITY;

  @PropertyApi({
    description: 'Group size',
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

  @PropertyApi({
    description: 'Total avatars (users)',
    type: 'number',
    default: 0
  })
  @Input() set total(total: number) {
    this._total = total || 0;
  }

  get total() {
    return this._total;
  }

  @ContentChildren(AvatarComponent)
  avatars: QueryList<AvatarComponent>;

  @HostBinding('attr.data-capacity')
  get capacity() {
    return Math.min(this.avatars.length, MAX_CAPACITY);
  }

  get overflow() {
    return Math.max(this.total - MAX_CAPACITY, 0);
  }
}
