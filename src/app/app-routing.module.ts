import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'servicio',
    loadChildren: () => import('./home/mservicios/servicios.module').then(module => module.ServiciosModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./home/mclientes/clientes.module').then(module => module.ClientesModule)
  },
  {
    path: 'serviciosclientes',
    loadChildren: () => import('./home/mcliserv/clientesservicio.module').then(module => module.ClientesservicioModule)
  },
  {
    path: '**',
    redirectTo: 'serviciosclientes'
  }
];

@NgModule({
  /**imports: [RouterModule.forRoot(routes)],*/
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
