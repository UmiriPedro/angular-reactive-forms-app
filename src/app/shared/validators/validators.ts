import { FormControl, ValidationErrors } from "@angular/forms";

// Validación para que el name sean dos palabras
export const firstNameAndLastnamePatter: string = '([a-zA-Z]+) ([a-zA-Z]+)';

// Validación para el email
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

// Validación que el username no puede ser Strider
export const cantBeStrider = ( control: FormControl ): ValidationErrors | null => {
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
