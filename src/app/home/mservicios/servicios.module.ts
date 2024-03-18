import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServiciosListComponent } from './components/servicios/servicios-list/servicios-list.component';
import { ServiciosCreateComponent } from './components/servicios/servicios-create/servicios-create.component';
import { ServiciosEditComponent } from './components/servicios/servicios-edit/servicios-edit.component';

@NgModule({
  declarations: [
    ServiciosComponent,
    ServiciosListComponent,
    ServiciosCreateComponent,
    ServiciosEditComponent,
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
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
  ],
})
export class ServiciosModule {}
