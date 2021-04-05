export function validate(): MethodDecorator {
  return function validateMethod(
    target: any,
    name: string,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value; // references the method being decorated

    descriptor.value = function (...args) {
      if (this.industrialForm.invalid) {
        for (const key of Object.keys(this.industrialForm.controls)) {
          if (this.industrialForm.controls[key].invalid) {
            this.industrialForm.controls[key].elementref.nativeElement.focus();
            break;
          }
        }
        return;
      }

      // exit the function
      method.apply(this, args);
    };
  };
}
