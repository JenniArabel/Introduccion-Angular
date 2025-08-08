import { Component, Input } from '@angular/core';

@Component({
  selector: 'saludo-hijo',
  standalone: true,
  imports: [],
  templateUrl: './saludo-hijo.component.html',
})
export default class SaludoHijoComponent {
  @Input() saludarDesdeHijo: boolean = false;
  nombreHijo: string = 'Hijo';
}
