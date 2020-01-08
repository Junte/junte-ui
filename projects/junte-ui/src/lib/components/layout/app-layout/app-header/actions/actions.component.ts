import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { PropertyApi } from '../../../../../decorators/api';
import { Gutter, UI } from '../../../../../enum/ui';
import { ActionComponent } from '../action/action.component';

@Component({
  selector: 'jnt-actions',
  templateUrl: './actions.encapsulated.html'
})
export class ActionsComponent {

  private _gutter: Gutter = Gutter.tiny;

  ui = UI;

  @PropertyApi({
    description: 'Elements gutter',
    path: 'ui.gutter',
    default: Gutter.tiny,
    options: [Gutter.tiny, Gutter.small, Gutter.normal, Gutter.large, Gutter.big, Gutter.huge]
  })

  @Input() set gutter(gutter: Gutter) {
    if (!!gutter) {
      this._gutter = gutter;
    }
  }

  get gutter() {
    return this._gutter;
  }

  @HostBinding('attr.host') readonly host = 'jnt-actions-host';

  @ContentChildren(ActionComponent)
  actions: QueryList<ActionComponent>;
}