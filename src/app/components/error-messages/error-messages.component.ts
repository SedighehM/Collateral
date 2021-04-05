import { Component, Input, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent implements OnInit {

  constructor(private ValidationServic:ValidationService) { }
  @Input() controlErrors;

  ngOnInit(): void {
  }
  get errorMessages() {
    return ValidationService.getValidatorErrorMessage(this.controlErrors)
  }


}
