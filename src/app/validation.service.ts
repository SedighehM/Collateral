import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}
  static getValidatorErrorMessage(controlErrors) {
    const config = {
      required: 'اجباری است',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword:
        'Invalid password. Password must be at least 6 characters long, and contain a number.',
      email: 'email',
    };
    var errors = [];
    for (const propertyName in controlErrors) {
      errors.push(config[propertyName]);
    }
    return errors;
  }
}
