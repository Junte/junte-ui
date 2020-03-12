import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { FormControlComponent } from './control/form-control.component';
import { FormState } from './enums';

@Component({
  selector: 'jnt-form',
  templateUrl: './form.encapsulated.html'
})
export class FormComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-form-host';

  ui = UI;

  formState = FormState;

  @PropertyApi({
    description: 'Name form group',
    type: 'FormGroup',
  })
  @Input('formGroup')
  form: FormGroup;

  @PropertyApi({
    description: 'Form loading',
    type: 'boolean',
  })
  @Input()
  loading = false;

  @PropertyApi({
    description: 'Title for form',
    type: 'string',
  })
  @Input()
  title: string;

  @PropertyApi({
    description: 'State of form',
    path: 'ui.form.state',
    options: [FormState.error,
      FormState.loading]
  })
  @Input()
  state: FormState;

  @ContentChild('formFooterTemplate')
  footerTemplate: TemplateRef<any>;

  @Output()
  submitted = new EventEmitter();

  @ContentChildren(FormControlComponent, {descendants: true})
  controls: QueryList<FormControlComponent>;

  ngOnInit() {
    this.form.statusChanges.subscribe(status => {
      const controls = this.controls;
      controls.filter(c => !!c.name && !!c.messages.length)
        .forEach(c => {
          const control = this.form.get(c.name);
          const messages = c.messages;
          messages.forEach(m => m.active = !!(control.hasError(m.type) && control.errors && control.dirty));
        });
    });
  }

  @HostListener('submit')
  onSubmit() {
    if (!!this.form) {
      this.form.markAsDirty();
      this.form.updateValueAndValidity();

      if (this.form.valid) {
        this.submitted.emit();
        this.form.markAsPristine();
        this.form.updateValueAndValidity();
      }
    }
  }
}
