import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsService {

  // Validación para que el name sean dos palabras
  public static firstNameAndLastnamePatter: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  // Validación para el email
  public static emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  // Validación que el username no puede ser Strider
  public cantBeStrider = ( control: FormControl ): ValidationErrors | null => {
    // Obtengo el valor del control, le saco los espacios y lo pongo todo en minúscula
    const value: string = control.value.trim().toLowerCase();

    // Si el valor es 'strider'
    if ( value === 'strider' ) {
      // Devuelvo el error noStrider en true
      return {
        noStrider: true
      };
    }

    return null;
  };

  public isInvalidField( form: FormGroup, field: string ) {
    return form.controls[field].errors
      && form.controls[field].touched;
  }

  isFieldOneEqualFieldTwo( fieldOne: string, fieldTwo: string ): ValidationErrors | null {
    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      const fieldValueOne = formGroup.get(fieldOne)?.value || '';
      const fieldValueTwo = formGroup.get(fieldTwo)?.value || '';

      if ( fieldValueOne !== fieldValueTwo ) {
        formGroup.get(fieldTwo)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }

      formGroup.get(fieldTwo)?.setErrors(null);
      return null;
    };

  }

}
