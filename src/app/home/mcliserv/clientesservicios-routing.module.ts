import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteserviciosComponent } from './components/clienteservicios/clienteservicios.component';
import { ClienteserviciosListComponent } from './components/clienteservicios/clienteservicios-list/clienteservicios-list.component';

const routes: Routes = [
  {
    path: 'listaservicioscliente',
    component: ClienteserviciosComponent,
    children: [
      {
        path: '',
        component: ClienteserviciosListComponent,
      }
      // {
      //   path:'editarcliente/:id',
      //   component: ClientesEditComponent
      // },
    ],
  },
  {
    path: '**',
    redirectTo: 'listaservicioscliente',
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ClientesserviciosRoutingModule {}
