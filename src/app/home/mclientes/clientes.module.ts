import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { MatTableModule } from '@angular/material/table';
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
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';
import { ClientesCreateComponent } from './components/clientes/clientes-create/clientes-create.component';
import { ClientesEditComponent } from './components/clientes/clientes-edit/clientes-edit.component';

@NgModule({
  declarations: [
    ClientesComponent,
    ClientesListComponent,
    ClientesCreateComponent,
    ClientesEditComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
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
  ]
})
export class ClientesModule { }
