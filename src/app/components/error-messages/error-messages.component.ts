import { Component, Input, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent implements OnInit {

  constructor(private ValidationServic:ValidationService) { }
  @Input() control;

  ngOnInit(): void {
  }
  get errorMessage() {
    console.log(this.control);
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }


}
