import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'despedida',
  standalone: true,
  imports: [],
  templateUrl: './despedida.component.html',
})
export default class DespedidaComponent {
  nombre: string = '';

  constructor(private route: ActivatedRoute,private router: Router) {
    this.nombre = this.route.snapshot.paramMap.get('nombre') || 'invitado';
  }

  volverAlSaludo() {
    this.router.navigate(['/saludo']);
  }
}
