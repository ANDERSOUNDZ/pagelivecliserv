import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioPageComponent } from './pages/servicio-page/servicio-page.component';
import { ClientePageComponent } from './pages/cliente-page/cliente-page.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    ServicioPageComponent,
    ClientePageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ServicioPageComponent,
    ClientePageComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
