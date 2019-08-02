import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { Icons, Schemes, UI } from '../../enum/ui';
import { BadgeComponent } from '../badge/badge.component';

const PATTERN = /^HTTP|HTTP|http(s)?:\/\/(www\.)?[A-Za-z0-9]+([\-\.]{1}[A-Za-z0-9]+)*\.[A-Za-z]{2,40}(:[0-9]{1,40})?(\/.*)?$|^#/;
const ALLOW_TARGETS = ['_blank', '_self', '_parent', '_top'];
const DEFAULT_TARGET = '_self';

@Component({
  selector: 'jnt-link',
  templateUrl: './link.encapsulated.html'
})
export class LinkComponent {

  @HostBinding('attr.host') readonly host = 'jnt-link-host';

  ui = UI;

  private _source: string | string[];
  private _target: string;

  externalLink = false;

  @HostBinding('attr.disabled')
  @Input() disabled = false;

  @Input()
  scheme: Schemes = Schemes.primary;

  @Input() exact = true;
  @Input() icon: Icons;
  @Input() title: string;

  @Input()
  set source(source: string | string[]) {
    this.externalLink = !!source && !Array.isArray(source) && !!source.match(PATTERN);
    this._source = !this.externalLink ? (Array.isArray(source) ? source : [source]) : source;
  }

  get source() {
    return this._source;
  }

  @Input()
  set target(target: string) {
    this._target = ALLOW_TARGETS.includes(target) ? target : DEFAULT_TARGET;
  }

  get target() {
    return this._target;
  }

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

}
