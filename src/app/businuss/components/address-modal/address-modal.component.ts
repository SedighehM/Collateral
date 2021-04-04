import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss'],
})
export class AddressModalComponent implements OnInit {
  constructor() {}
  Address: FormGroup = new FormGroup({
    registerationNumber: new FormControl(),
    registerationDate: new FormControl(),
    registerationLocation: new FormControl(),
    primaryPelalk: new FormControl(),
    secondaryPelak: new FormControl(),
    details: new FormControl(),
  });
  @Output() emitService = new EventEmitter();
  @Output() closeEmit = new EventEmitter();

  ngOnInit(): void {}
  addAddress() {
    this.emitService.next(this.Address);
  }
  closeModal() {
    this.closeEmit.next();
  }
  initialize(address: any) {
    this.Address.setValue(address);
  }
}
