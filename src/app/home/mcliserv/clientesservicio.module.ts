import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesserviciosRoutingModule } from './clientesservicios-routing.module';
import { ClienteserviciosComponent } from './components/clienteservicios/clienteservicios.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ClienteserviciosListComponent } from './components/clienteservicios/clienteservicios-list/clienteservicios-list.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ClienteserviciosAsignarComponent } from './components/clienteservicios/clienteservicios-asignar/clienteservicios-asignar.component';

@NgModule({
  declarations: [
    ClienteserviciosComponent,
    ClienteserviciosListComponent,
    ClienteserviciosAsignarComponent
  ],
  imports: [
    CommonModule,
    ClientesserviciosRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatGridListModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ]
})
export class ClientesservicioModule { }
