import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';

import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

  // El AbstractControl es el FormControl, FormGroup o FormArray
  validate(control: AbstractControl ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {
      console.log({ email });

      if ( email === 'pedro@google.com') {
        subscriber.next({ emailTaken: true });
        // Hace la limpieza y se desuscribe
        subscriber.complete();
      }

      // Lo que la persona escribió, no está tomado
      subscriber.next(null);
      subscriber.complete();

    }).pipe(
      delay( 3000 )
    );

    return httpCallObservable;
  }

  // El AbstractControl es el FormControl, FormGroup o FormArray
  /*validate(control: AbstractControl ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;
    console.log({ email });

    return of({
      emailTaken: true
    }).pipe(
      // Realentizamos 2 segundos
      delay( 2000 )
    );
  }*/

}
