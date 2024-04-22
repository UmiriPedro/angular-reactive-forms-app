import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

// Constante con el valor que va a tener las propiedades 'inStorage' y 'price' luego de reiniciarlas
const INITIAL_VALUE: number = 0;

// Constante de un producto
const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 6
};

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.minLength(3) ] ],
    price: [INITIAL_VALUE, [ Validators.required, Validators.min(0)] ],
    inStorage: [INITIAL_VALUE, [ Validators.required, Validators.min(0)] ]
  });

  constructor( private formBuilder: FormBuilder ) {}

  ngOnInit(): void {
    // Cuando inicia, cargamos el formulario con la constante rtx5090
    //this.myForm.reset( rtx5090 );
  }

  // Método que devuelve true si el campo que recibe tiene errores o fue tocado.
  isInvalidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched;
  }

  // Método que devuelve el mensaje de error del campo que recibe.
  getFieldError( field: string ): string | null {
    // Si el formulario no tiene el campo recibido, devuelve null
    if ( !this.myForm.controls[field] ) return null;

    // Nos guardamos los errores o si no lo tiene, un objeto vacío
    const errors = this.myForm.controls[field].errors || {};

    // Object.keys(errors): devuelve un array con las claves
    for ( const key of Object.keys(errors) ) {
      switch( key ) {
        // En el caso del error 'required'
        case 'required':
          return 'Este campo es requerido.';

        // En el caso del error 'minlength'
        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracteres.`;
      }
    }

    return null;
  }

  onSave(): void {
    /*
      Si el formulario es invalido
      Con el invalid ejecuta las validaciones de cada campo del formulario.
    */
    if ( this.myForm.invalid ) {
      // Marca todos los campos como si fueran tocados
      this.myForm.markAllAsTouched();
      // Finaliza la ejecución
      return;
    }

    console.log(this.myForm.value);

    /*
      Reestablece el formulario a sus valores originales.
      Le enviamos un objeto con las mismas propiedades que el formulario
        y el valor que queremos que tenga al resetear.
    */
    this.myForm.reset({ price: INITIAL_VALUE, inStorage: INITIAL_VALUE });
  }
}
