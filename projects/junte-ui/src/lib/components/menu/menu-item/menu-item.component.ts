import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { FontIcons, Matching, Schemes, UI } from '../../../enum/ui';
import { BadgeComponent } from '../../badge/badge.component';

const DEFAULT_TARGET = '_self';

@Component({
  selector: 'jnt-menu-item',
  template: ''
})
export class MenuItemComponent {

  ui = UI;

  @Input() icon: FontIcons;
  @Input() title: string;
  @Input() link: string | string[];
  @Input() target: string = DEFAULT_TARGET;
  @Input() badge: number;
  @Input() matching: Matching = Matching.fullMatch;
  @Input() scheme: Schemes = Schemes.primary;
  @Output() click = new EventEmitter<any>();

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

}
