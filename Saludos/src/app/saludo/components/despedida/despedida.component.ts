import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'despedida',
  standalone: true,
  imports: [],
  templateUrl: './despedida.component.html',
})
export default class DespedidaComponent {
  nombre: string = '';

  constructor(private route: ActivatedRoute) {
    this.nombre = this.route.snapshot.paramMap.get('nombre') || 'invitado';
  }
}
