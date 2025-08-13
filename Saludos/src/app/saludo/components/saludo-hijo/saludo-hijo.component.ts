import { Component, Input } from '@angular/core';
import { MayusculasPipe } from '../../pipe/mayusculas.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'saludo-hijo',
  standalone: true,
  imports: [ MayusculasPipe, CommonModule],
  templateUrl: './saludo-hijo.component.html',
  styleUrls: ['./saludo-hijo.component.css'],
})
export default class SaludoHijoComponent {
  @Input() saludarDesdeHijo: boolean = false;

  nombreHijo: string = 'desde el componente hijo!';

  colorClase: string = ''; //rojo o verde

  cambiarColorClase(color: string) {
    this.colorClase = color;
  }

}

// Sacar saludo-hijo del folder saludo-ang
