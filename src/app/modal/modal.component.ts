import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input({ required: true }) imgPath!: string;
  @Output() onModalCLosed = new EventEmitter<void>();

  closeModal() {
    this.onModalCLosed.emit();
  }
}
