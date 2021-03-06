import { Component, HostBinding, Input } from '@angular/core';
import { Validator } from '../../../core/enums/validator';
import { PropertyApi } from '../../../core/decorators/api';

@Component({
  selector: 'jnt-form-message',
  templateUrl: './form-message.encapsulated.html'
})
export class FormMessageComponent {

  @HostBinding('attr.host')
  readonly host = 'jnt-form-message-host';

  @HostBinding('attr.data-hidden')
  get hidden() {
    return !this.active;
  }

  @Input()
  active = false;

  @HostBinding('style.display')
  get style() {
    return !!this.active ? 'inline-block' : 'none';
  }

  @PropertyApi({
    description: 'Validation type error',
    path: 'ui.validator',
    options: [
      Validator.required,
      Validator.minLength,
      Validator.min,
      Validator.max
    ]
  })
  @Input()
  validator: Validator = null;
}
