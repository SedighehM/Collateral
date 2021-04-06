import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormGroupDirective,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
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
  parent: FormGroupDirective;
  @ViewChild('inp', { read: ElementRef }) input: ElementRef;

  constructor(private parentF: FormGroupDirective) {}
  validate(control: AbstractControl): ValidationErrors | null {
    this.formControl = control;
    this.parent = this.parentF;
    return control.invalid ? control.errors : null;
  }
  writeValue(value: string): void {
    this.value = value ? this.ricieveValue(value) : '';
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

  ngOnInit(): void {}
  ngAfterViewInit() {
    if (this.formControl.errors) {
      this.formControl['elementref'] = this.input;
    }
  }
  ricieveValue(value: any) {
    if (this.customType === 'date') {

      return moment.from(value, 'fa', 'YYYY/MM/DD').format("yyyy-MM-DD");
    } else return value;
  }
  sendValue(value: any) {
    if (this.customType === 'date') {
      this.onChange(moment(value, "yyyy-MM-DD").locale('fa').format('YYYY/MM/DD'));
    } else {
      this.onChange(value);
    }
  }
}
