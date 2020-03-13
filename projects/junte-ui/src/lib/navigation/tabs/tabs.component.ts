import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Outline } from '../../core/enums/outline';
import { UI } from '../../core/enums/ui';
import { TabComponent } from './tab.component';

@Component({
  selector: 'jnt-tabs',
  templateUrl: './tabs.encapsulated.html',
  animations: [
    trigger('flash', [
        state(
          'void',
          style({
            opacity: 0
          })
        ),
        state(
          '*',
          style({
            opacity: 1,
            width: '150%',
            height: '150%'
          })
        ),
        transition(
          'void => *',
          [
            animate('.4s ease-in-out')
          ]
        ),
        transition(
          '* => void',
          [
            animate('.3s ease-in-out', keyframes([
              style({opacity: '0'}),
            ]))
          ]
        ),
      ]
    ),
  ]
})
export class TabsComponent {

  ui = UI;
  active = 0;

  @HostBinding('attr.host')
  readonly host = 'jnt-tabs-host';

  @HostBinding('attr.outline')
  _outline: Outline = Outline.fill;

  @PropertyApi({
    description: 'there is/no background for the content',
    path: 'ui.outline',
    default: Outline.fill,
    options: [Outline.fill, Outline.transparent]
  })
  @Input() set outline(outline: Outline) {
    this._outline = outline || Outline.fill;
  }

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

}