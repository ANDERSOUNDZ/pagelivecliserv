import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServiciosListComponent } from './components/servicios/servicios-list/servicios-list.component';
import { ServiciosCreateComponent } from './components/servicios/servicios-create/servicios-create.component';
import { ServiciosEditComponent } from './components/servicios/servicios-edit/servicios-edit.component';

const routes: Routes = [
  {
    path: 'listaservicio',
    component: ServiciosComponent,
    children: [
      {
        path: '',
        component: ServiciosListComponent,
      },
      {
        path: 'crearservicio',
        component: ServiciosCreateComponent,
      },
      {
        path:'editarservicio/:id',
        component: ServiciosEditComponent
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'listaservicio',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ServiciosRoutingModule {}
