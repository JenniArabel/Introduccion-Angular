import { Component, Input } from '@angular/core';
import { MayusculasPipe } from '../../pipe/mayusculas.pipe';

@Component({
  selector: 'saludo-hijo',
  standalone: true,
  imports: [ MayusculasPipe],
  templateUrl: './saludo-hijo.component.html',
  styleUrls: ['./saludo-hijo.component.css'],
})
export default class SaludoHijoComponent {
  @Input() saludarDesdeHijo: boolean = false;

  nombreHijo: string = 'desde el componente hijo!';
  colorClase: string = ''; //rojo o azul

}
