import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    // Con formBuilder.array([]) creo un un array de form control
    favoriteGames: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ])
  });

  public newFavoriteGame: FormControl = new FormControl('', Validators.required );

  constructor( private formBuilder: FormBuilder ) {}

  get favoriteGames(): FormArray {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isInvalidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched;
  }

  isInvalidFieldInArray( formArray: FormArray, index: number ) {
    return formArray.controls[index].errors &&
      formArray.controls[index].touched;
  }

  getFieldError( field: string ): string | null {
    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for ( const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido.';

        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracteres.`;
      }
    }

    return null;
  }

  onAddToFavoriteGames(): void {
    if ( this.newFavoriteGame.invalid ) return;

    const newGame = this.newFavoriteGame.value;

    this.favoriteGames.push( this.formBuilder.control( newGame, Validators.required ));

    // Reestablecemos el campo a su estado pristine y untouch
    this.newFavoriteGame.reset();
  }

  onDeleteFavoriteGame( index: number ): void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset();

    // Seteamos el favoriteGames de myForm con un array vacío
    (this.myForm.controls['favoriteGames'] as FormArray ) = this.formBuilder.array([])
  }

}
