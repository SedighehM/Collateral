import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss'],
})
export class AddressModalComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  @Input() Address: FormGroup = new FormGroup({});
  @Output() emitService = new EventEmitter();
  @Output() closeEmit = new EventEmitter();


  ngOnInit(): void {
    if (this.checkAddress()) {
      this.Address = this.formBuilder.group({
        registerationNumber: new FormControl(),
        registerationDate: new FormControl(),
        registerationLocation: new FormControl(),
        primaryPelalk: new FormControl(),
        secondaryPelak: new FormControl(),
        details: new FormControl(),
      });
    }
  }
  addAddress() {
    this.emitService.next(this.Address);
  }
  closeModal(){
    this.closeEmit.next();
  }
  checkAddress(){
    return !this.Address.value.registerationNumber && !this.Address.value.registerationDate &&
    !this.Address.value.registerationLocation && !this.Address.value.primaryPelalk && !this.Address.value.secondaryPelak
    && !this.Address.value.details
  }
}
