import { Component } from '@angular/core';
import SaludoHijoComponent from './saludo-hijo/saludo-hijo.component';
import { MayusculasPipe } from '../pipe/mayusculas.pipe';

@Component({
  selector: 'saludo-ang',
  standalone: true,
  imports: [ SaludoHijoComponent, MayusculasPipe],
  templateUrl: './saludo-ang.component.html',
})
export default class SaludoAngComponent {
  name: string = 'Jenni';
  buttonText: string = 'Ocultar ';

  saludoDesdeHijo: boolean = true;

  // ocultarSaludo() {
  //   this.saludoDesdeHijo = false;
  // }

  ocultarSaludo() {
    if (this.saludoDesdeHijo === true) {
      this.saludoDesdeHijo = !this.saludoDesdeHijo;
      this.buttonText = 'Mostrar';
    } else {
      this.saludoDesdeHijo = true;
      this.buttonText = 'Ocultar';
    }
  }
}
