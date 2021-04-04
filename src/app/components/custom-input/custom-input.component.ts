import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }

  ]

})
export class CustomInputComponent implements OnInit {

  value: string;
  onChange: (value: any) => void;
  onTouched: () => void;
  disabled: boolean;
  @Input() customType: string;
  @Input() customLabel: string;
  @Input() customPlaceholder: string;
  formControl: AbstractControl;

  constructor() {
  }
  validate(control: AbstractControl): ValidationErrors | null {debugger

    this.formControl = control;
    return control.invalid ? control.errors : null;
  }
  writeValue(value: string): void {
    this.value = value ? value : '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


  ngOnInit(): void {

  }



}
