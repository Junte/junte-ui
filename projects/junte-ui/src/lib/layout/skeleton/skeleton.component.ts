import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { SkeletonType } from './enums';

@Component({
  selector: 'jnt-skeleton',
  templateUrl: './skeleton.encapsulated.html'
})
export class SkeletonComponent {

  private _type = SkeletonType.text;

  skeletonType = SkeletonType;

  @HostBinding('attr.host') readonly host = 'jnt-skeleton-host';

  @HostBinding('attr.size')
  _size = Size.normal;

  @PropertyApi({
    description: 'Skeleton type',
    path: 'ui.skeleton.type',
    default: SkeletonType.text,
    options: [SkeletonType.text,
      SkeletonType.avatar,
      SkeletonType.image]
  })

  @HostBinding('attr.type')
  @Input() set type(type: SkeletonType) {
    this._type = type || SkeletonType.text;
  }

  get type() {
    return this._type;
  }

  @PropertyApi({
    description: 'Avatar/image size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.tiny, Size.small, Size.normal, Size.large]
  })

  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Count of text lines',
    type: 'number',
    default: '1'
  })

  @HostBinding('attr.lines')
  @Input() lines = 1;

  @PropertyApi({
    description: 'Switch on/off animation',
    type: 'boolean',
    default: 'true'
  })

  @HostBinding('attr.animated')
  @Input() animated = true;

}