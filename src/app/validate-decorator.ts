export function validate( ) : MethodDecorator {
  return function validateMethod(
    target: any,
    name: string,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value; // references the method being decorated

    descriptor.value = function (...args) {
      if (this.industrialForm.invalid) return; // exit the function

      // This part will run when Meteor.isClient == false
      method.apply(this, args);
    };
  }

}
