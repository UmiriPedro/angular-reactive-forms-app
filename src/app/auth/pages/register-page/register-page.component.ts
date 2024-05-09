import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import * as customValidators from '../../../shared/validators/validators';
import { EmailValidator } from '../../../shared/validators/email-validator.service';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.pattern(ValidatorsService.firstNameAndLastnamePatter) ]],
    // email: ['', [ Validators.required, Validators.pattern(ValidatorsService.emailPattern) ], [ new EmailValidator() ]],
    email: ['', [ Validators.required, Validators.pattern(ValidatorsService.emailPattern) ], [ this.emailValidator.validate ]],
    username: ['', [ Validators.required, this.validatorService.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]]
  },
  {
    validators: [
      this.validatorService.isFieldOneEqualFieldTwo( 'password', 'password2' )
    ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidator: EmailValidator
   ) {}

  isInvalidField( field: string ) {
    return this.validatorService.isInvalidField( this.myForm, field );
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }

}
