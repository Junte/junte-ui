import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';

enum Overrides {
  tablet,
  desktop,
  wide
}

@Component({
  selector: 'jnt-col',
  templateUrl: './col.encapsulated.html'
})
export class ColComponent {

  @HostBinding('attr.host') readonly host = 'jnt-col-host';

  private _mobile = 12;
  private _tablet = 6;
  private _desktop = 1;
  private _wide = 1;

  overrides: Overrides[] = [];

  @HostBinding('attr.data-mobile')
  get forMobile() {
    return this._mobile;
  }

  @HostBinding('attr.data-tablet')
  get forTablet() {
    return this.overrides.includes(Overrides.tablet) ? this._tablet : this.forMobile;
  }

  @HostBinding('attr.data-desktop')
  get forDesktop() {
    return this.overrides.includes(Overrides.desktop) ? this._desktop : this.forTablet;
  }

  @HostBinding('attr.data-wide')
  get forWide() {
    return this.overrides.includes(Overrides.wide) ? this._wide : this.forDesktop;
  }

  @PropertyApi({
    description: 'Number of cells to occupy on screen < 768px',
    type: 'number: 1...12',
    default: '12'
  })
  @Input() set mobile(mobile: number) {
    this._mobile = mobile;
  }

  @PropertyApi({
    description: 'Number of cells to occupy on screen >= 768px',
    type: 'number: 1...12',
    default: '6'
  })
  @Input() set tablet(tablet: number) {
    this._tablet = tablet;
    this.overrides.push(Overrides.tablet);
  }

  @PropertyApi({
    description: 'Number of cells to occupy on screen >= 992px',
    type: 'number: 1...12',
    default: '1'
  })
  @Input() set desktop(desktop: number) {
    this._desktop = desktop;
    this.overrides.push(Overrides.desktop);
  }

  @PropertyApi({
    description: 'Number of cells to occupy on screen >= 1200px',
    type: 'number: 1...12',
    default: '1'
  })
  @Input() set wide(wide: number) {
    this._wide = wide;
    this.overrides.push(Overrides.wide);
  }

  @PropertyApi({
    description: 'Number of cells to occupy for all breakpoints',
    type: 'number: 1...12',
    default: 'null'
  })
  @HostBinding('attr.data-span')
  @Input() span = null;

}
