import { Component, HostBinding, Input } from '@angular/core';
import { IconModifier } from '../../core/enums/icon-modifier';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { Stroke } from '../../core/enums/stroke';
import { IconType } from './enums';

const DEFAULT_ICONSET = 'junte-ui-icons-default';

@Component({
  selector: 'jnt-icon',
  templateUrl: './icon.encapsulated.html'
})
export class IconComponent {

  @HostBinding('attr.host') readonly host = 'jnt-icon-host';

  iconType = IconType;
  iconModifier = IconModifier;

  @HostBinding('attr.data-size')
  _size: Size = Size.auto;

  _stroke: Stroke = Stroke.normal;

  @HostBinding('attr.data-icon')
  _icon: string;

  @HostBinding('attr.data-type')
  type: IconType = IconType.font;

  iconset: string = DEFAULT_ICONSET;

  @HostBinding('attr.tags')
  tags: string[];

  @PropertyApi({
    description: 'Icon query in special format',
    type: '[name:type:iconset]'
  })
  @Input()
  set icon(query: string) {
    if (!query) {
      console.warn('Icon query was not passed');
      return;
    }

    const [icon, type, iconset, tags] = query.split(':');
    [this._icon, this.type, this.iconset, this.tags] =
      [icon, type as IconType || IconType.font, iconset || DEFAULT_ICONSET, !!tags ? tags.split('|') : []];
  }

  @PropertyApi({
    description: 'Stroke for icon',
    type: '[ui.stroke]'
  })
  @Input()
  set stroke(stroke: Stroke) {
    this._stroke = stroke || Stroke.normal;
  }

  get stroke() {
    return this._stroke;
  }

  @PropertyApi({
    description: 'Size for icon',
    type: '[ui.size]'
  })
  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Color for icon',
    type: '[ui.color]'
  })
  @Input()
  color = null;

  @HostBinding('attr.data-has-color')
  get hasColor() {
    return !!this.color;
  }

  @PropertyApi({
    description: 'Modifier for icon: add, edit, delete',
    path: 'ui.icon.modifier',
    options: [IconModifier.add, IconModifier.edit, IconModifier.delete]
  })
  @Input()
  modifier: IconModifier;

}
