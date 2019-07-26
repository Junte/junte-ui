import { Component, HostBinding, Input } from '@angular/core';
import { Colors } from '../../enum/ui';

@Component({
  selector: 'jnt-dot',
  templateUrl: './dot.encapsulated.html'
})

export class DotComponent {

  @HostBinding('attr.host') readonly host = 'jnt-dot-host';

  @Input()
  @HostBinding('style.background-color')
  color: string = Colors.orange;

}
