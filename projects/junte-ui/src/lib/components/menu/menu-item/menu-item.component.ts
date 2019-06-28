import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icons, Schemes } from '../../../enum/ui';

@Component({
  selector: 'jnt-menu-item',
  template: ''
})
export class MenuItemComponent {

  @Input() icon: Icons;
  @Input() title: string;
  @Input() link: string;
  @Output() click = new EventEmitter<any>();
  @Input() badge: number;
  @Input('exact-link') exactLink = true;
  @Input() scheme: Schemes = Schemes.primary;

}
