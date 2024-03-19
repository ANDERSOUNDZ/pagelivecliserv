import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioPageComponent } from './pages/servicio-page/servicio-page.component';
import { ClientePageComponent } from './pages/cliente-page/cliente-page.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClienteServicioPageComponent } from './pages/cliente-servicio-page/cliente-servicio-page.component';

@NgModule({
  declarations: [
    ServicioPageComponent,
    ClientePageComponent,
    SidebarComponent,
    ClienteServicioPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ServicioPageComponent,
    ClientePageComponent,
    ClienteServicioPageComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
