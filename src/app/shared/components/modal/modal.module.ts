import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FocusTrapModule } from '../../directives/focus-trap/focus-trap.module';
import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ],
  imports: [
    CommonModule,
      FocusTrapModule,
  ],
  providers: [
    ModalService
  ]
})
export class ModalModule {}
