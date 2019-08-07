import { Component, ComponentFactoryResolver, Injector, TemplateRef, ViewChild } from '@angular/core';
import { ModalOptions, ModalService, UI } from 'junte-ui';
import { ModalTestFactoryComponent } from './test.component';
import { ModalPositions } from '../../../../projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.scss']
})

export class ModalTestComponent {

  ui = UI;

  @ViewChild('content')
  content: TemplateRef<any>;

  @ViewChild('drawerLeft')
  drawerLeft: TemplateRef<any>;

  constructor(private modalService: ModalService,
              private injector: Injector,
              private cfr: ComponentFactoryResolver) {
  }

  open() {
    this.modalService.open(this.content);
  }

  openLeft() {
    this.modalService.open(this.drawerLeft, new ModalOptions({title: 'Drawer', position: ModalPositions.left}));
  }

  openCalendar() {
    const component = this.cfr.resolveComponentFactory(ModalTestFactoryComponent).create(this.injector);
    this.modalService.open(component, new ModalOptions({title: 'Calendar', maxHeight: '1024px', maxWidth: '1080px'}));
  }

  close() {
    this.modalService.close();
  }
}
