import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss'],
})
export class AddressModalComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  Address: FormGroup = new FormGroup({});
  @Input() addressObject = {
    registerationNumber: null,
    registerationDate: null,
    registerationLocation: null,
    primaryPelalk: null,
    secondaryPelak:null,
    details:null
  };
  @Output() emitService = new EventEmitter();
  @Output() closeEmit = new EventEmitter();

  ngOnInit(): void {
    debugger
    if (this.checkAddress()) {
      this.Address = this.formBuilder.group({
        registerationNumber: new FormControl(),
        registerationDate: new FormControl(),
        registerationLocation: new FormControl(),
        primaryPelalk: new FormControl(),
        secondaryPelak: new FormControl(),
        details: new FormControl(),
      });
    } else {debugger
      this.Address = this.formBuilder.group({
        registerationNumber: new FormControl(
          this.addressObject.registerationNumber
        ),
        registerationDate: new FormControl(this.addressObject.registerationDate),
        registerationLocation: new FormControl(this.addressObject.registerationLocation),
        primaryPelalk: new FormControl(this.addressObject.primaryPelalk),
        secondaryPelak: new FormControl(this.addressObject.secondaryPelak),
        details: new FormControl(this.addressObject.details),
      });
    }
  }
  addAddress() {
    this.emitService.next(this.Address);
  }
  closeModal() {
    this.closeEmit.next();
  }
  checkAddress() {
    debugger
    return (
      !this.addressObject.registerationNumber &&
      !this.addressObject.registerationDate &&
      !this.addressObject.registerationLocation &&
      !this.addressObject.primaryPelalk &&
      !this.addressObject.secondaryPelak &&
      !this.addressObject.details
    );
  }
}
