import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../../../interfaces/Cliente';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientesService } from '../../../services/clientes.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css',
})
export class ClientesListComponent implements OnInit {
  dataSource!: MatTableDataSource<Cliente>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    'id',
    'nombreCliente',
    'correo',
    'estado',
    'asignar',
    'edit',
    'delete',
  ];

  constructor(
    private clienteService: ClientesService,
    private snackBar: MatSnackBar,
    private route: Router
  ) {
    this.listaCliente();
  }
  ngOnInit(): void {}

  listaCliente(): void {
    this.clienteService.listaCliente().subscribe({
      next: (res: Cliente[]) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
      },
    });
  }

  actualizarCliente(clienteId: number) {
    console.log(clienteId);
    this.route.navigate(['/cliente/listascliente/editarcliente', clienteId]);
  }

  deleteCliente(idCliente: any): void {
    this.clienteService.eliminarCliente(idCliente).subscribe({
      next: () => {
        this.alertaMensaje('Registro eliminado', 'ok');
        this.dataSource.data = this.dataSource.data.filter(
          (cliente) => cliente.id !== idCliente
        );
        if (this.dataSource.paginator!.length !== this.dataSource.data.length) {
          this.dataSource.paginator!.length = this.dataSource.data.length;
        }
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 500) {
          this.alertaMensaje(
            'No se puede eliminar un cliente pues mantiene servicios adjuntos',
            'ok'
          );
        } else {
          this.snackBar.open(
            'MENSAJE: ' +
              'No se puede eliminar un cliente, pues se encuentra ligado a un servicio.',
            'Cerrar',
            {
              duration: 10000,
              panelClass: ['custom-snack-bar'],
            
            }

          );
        }
      },
    });
  }

  asignarServicioCliente(clienteId: number): void {
    console.log(clienteId);
    this.route.navigate([
      '/cliente/listascliente/asignarserviciocliente',
      clienteId,
    ]);
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
