import { Component, Input } from '@angular/core';

@Component({
  selector: 'saludo-hijo',
  standalone: true,
  imports: [],
  templateUrl: './saludo-hijo.component.html',
  styleUrls: ['./saludo-hijo.component.css'],
})
export default class SaludoHijoComponent {
  @Input() saludarDesdeHijo: boolean = false;

  nombreHijo: string = 'desde el componente hijo!';
  colorClase: string = ''; //rojo o azul

}
