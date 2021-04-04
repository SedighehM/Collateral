import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: 'اجباری است',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword:
        'Invalid password. Password must be at least 6 characters long, and contain a number.',
      minlength: `Minimum length ${validatorValue.requiredLength}`,
    };

    return config[validatorName];
  }
}
