import { Component, OnInit, ViewChild } from '@angular/core';
import { Servicio } from '../../../interfaces/Servicio';
import { ServicioService } from '../../../services/servicio.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-servicios-list',
  templateUrl: './servicios-list.component.html',
  styleUrl: './servicios-list.component.css',
})
export class ServiciosListComponent implements OnInit {
  dataSource!: MatTableDataSource<Servicio>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    'id',
    'nombreServicio',
    'descripcion',
    'estado',
    'edit',
    'delete',
  ];

  constructor(
    private servicioService: ServicioService,
    private snackBar: MatSnackBar,
    private route: Router
  ) {
    this.listaServicio();
  }

  ngOnInit(): void {}

  listaServicio(): void {
    this.servicioService.listaServicios().subscribe({
      next: (res: Servicio[]) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
      },
    });
  }

  actualizarServicio(servicioId: number) {
    console.log(servicioId);
    this.route.navigate(['/servicio/listaservicio/editarservicio', servicioId]);
  }

  deleteServicio(idServicio: any): void {
    this.servicioService.eliminarServicio(idServicio).subscribe({
      next: () => {
        this.alertaMensaje('Registro eliminado', 'ok');
        this.dataSource.data = this.dataSource.data.filter(
          (servicio) => servicio.id !== idServicio
        );
        if (this.dataSource.paginator!.length !== this.dataSource.data.length) {
          this.dataSource.paginator!.length = this.dataSource.data.length;
        }
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 500) {
          this.alertaMensaje('No se puede eliminar este servicio pues mantiene servicios adjuntos', 'Error');
        } else {
          this.snackBar.open('Error al eliminar el servicio: ' + err.message, 'Cerrar', {
            duration: 3000,
          });
        }
      },
    });
  }

  alertaMensaje(mensaje: string, accion: string) {
    this.snackBar.open(mensaje, accion),
      this.snackBar.open(mensaje, accion, {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
