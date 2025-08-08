import { Component } from '@angular/core';
import SaludoHijoComponent from './saludo-hijo/saludo-hijo.component';
import { MayusculasPipe } from '../pipe/mayusculas.pipe';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    // Redirigir a despedida con un nombre por defecto
  }

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

  despedirse() {
    this.router.navigate(['/despedida', this.name]);
  }
}
