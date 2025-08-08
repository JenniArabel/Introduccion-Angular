import { Component } from '@angular/core';
import SaludoHijoComponent from './saludo-hijo/saludo-hijo.component';

@Component({
  selector: 'saludo-ang',
  standalone: true,
  imports: [ SaludoHijoComponent],
  templateUrl: './saludo-ang.component.html',
})
export default class SaludoAngComponent {
  name: string = 'Jenni';

  saludoDesdeHijo: boolean = true;
}
