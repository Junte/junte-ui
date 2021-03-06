import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Fit } from '../../core/enums/fit';
import { Position } from '../../core/enums/position';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-picture',
  templateUrl: './picture.encapsulated.html'
})
export class PictureComponent {

  @HostBinding('attr.host') readonly host = 'jnt-picture-host';

  ui = UI;

  _src: string;
  _icon = UI.icons.image;

  @HostBinding('attr.data-has-src')
  get hasSrc() {
    return !!this._src;
  }

  @HostBinding('attr.data-fit')
  _fit: Fit = Fit.width;

  @HostBinding('attr.data-position')
  _position: Position = Position.center;

  @PropertyApi({
    description: 'Icon on picture',
    type: 'string',
    default: 'ui.icons.image',
  })
  @Input() set icon(icon: string) {
    this._icon = icon || UI.icons.image;
  }

  get icon() {
    return this._icon;
  }

  @PropertyApi({
    description: 'Path to image on picture',
    type: 'string'
  })
  @Input() set src(src: string) {
    this._src = src || null;
  }

  get src() {
    return this._src;
  }

  @PropertyApi({
    description: 'Picture title',
    type: 'string',
  })
  @HostBinding('attr.title')
  @Input() title: string;

  @PropertyApi({
    description: 'Picture alt',
    type: 'string',
  })
  @HostBinding('attr.alt')
  @Input() alt: string;

  @PropertyApi({
    description: 'Picture width',
    type: 'string'
  })
  @HostBinding('style.width')
  @Input() width;

  @PropertyApi({
    description: 'Picture height',
    type: 'string'
  })
  @HostBinding('style.height')
  @Input() height;

  @PropertyApi({
    description: 'Image size in relation to width or height',
    path: 'ui.fit',
    default: Fit.width,
    options: [Fit.width, Fit.height]
  })
  @Input() set fit(fit: Fit) {
    this._fit = fit || Fit.width;
  }

  @PropertyApi({
    description: 'Image position',
    path: 'ui.position',
    default: Position.center,
    options: [Position.center, Position.left, Position.right, Position.bottom, Position.top]
  })
  @Input() set position(position: Position) {
    this._position = position || Position.center;
  }

  @ContentChild('pictureCopyrightTemplate')
  pictureCopyrightTemplate: TemplateRef<any>;

}
