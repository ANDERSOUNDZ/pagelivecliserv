import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';
import { ClientesCreateComponent } from './components/clientes/clientes-create/clientes-create.component';
import { ClientesEditComponent } from './components/clientes/clientes-edit/clientes-edit.component';

const routes: Routes = [
  {
    path: 'listascliente',
    component: ClientesComponent,
    children: [
      {
        path: '',
        component: ClientesListComponent,
      },
     {
        path: 'crearcliente',
        component: ClientesCreateComponent,
      },
      {
        path:'editarcliente/:id',
        component: ClientesEditComponent
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'listascliente',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ClientesRoutingModule {}
