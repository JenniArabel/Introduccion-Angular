import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'saludo',
    loadComponent: () =>
      import('./saludo/components/saludo-ang/saludo-ang.component'),
    children: [
      {
        path: 'hijo',
        loadComponent: () =>
          import(
            './saludo/components/saludo-hijo/saludo-hijo.component'
          ),
      },
    ],

  },
  {
    path: 'despedida/:nombre',
    loadComponent: () =>
      import('./saludo/components/despedida/despedida.component'),
  },
  {
    path: '**',
    redirectTo: 'saludo',
  }
];
