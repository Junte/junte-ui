import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent, PopoverComponent, ModalService, PopoverService, UI } from 'junte-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ui = UI;

  @ViewChild('popover') popover: PopoverComponent;
  @ViewChild('modal') modal: ModalComponent;
  @ViewChild('layout', {read: ElementRef}) backdrop;

  constructor(private modalService: ModalService,
              private popoverService: PopoverService) {
  }

  ngAfterViewInit() {
    this.modalService.register(this.modal);
    this.popoverService.register(this.popover);
  }
}
