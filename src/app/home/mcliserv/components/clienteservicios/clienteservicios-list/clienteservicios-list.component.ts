import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteServicioLista } from '../../../interfaces/ClienteServicioLista';
import { ClientesservicioService } from '../../../services/clientesservicio.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-clienteservicios-list',
  templateUrl: './clienteservicios-list.component.html',
  styleUrl: './clienteservicios-list.component.css'
})
export class ClienteserviciosListComponent implements OnInit{

  isChecked = false;
  dataSource!: MatTableDataSource<ClienteServicioLista>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    'nombreCliente',
    'nombreServicio',
    'estado',
    'delete'
  ];

  constructor(
    private cliServServices: ClientesservicioService,
    private snackBar: MatSnackBar,
    private route: Router
  ){
    this.cargarLista();
  }

  ngOnInit(): void {

  }

  cargarLista(): void{
    this.cliServServices.listaClienteServicios().subscribe({
      next: (res: ClienteServicioLista[]) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
      },
    });
  }

  cambioEstado(idCliente: number, idServicio: number, estado:boolean){

    this.cliServServices.cambiarEstadoServicio(idCliente,idServicio,estado).subscribe(
      (x)=>{
        x = this.isChecked;
      }
    );
  }

  deleteServicio(idCliente: number, idServicio: number):void{
    console.log(idCliente, idServicio);
    this.cliServServices.eliminarServiciosCliente(idCliente,idServicio).subscribe(
      {
        next: ()=>{
          this.alertaMensaje('Registro eliminado', 'ok');
          this.dataSource.data = this.dataSource.data.filter(
            (servicio) => servicio.id !== idServicio
          );
          if (this.dataSource.paginator!.length !== this.dataSource.data.length) {
            this.dataSource.paginator!.length = this.dataSource.data.length;
          }
          this.cargarLista();
        }
      }
    );
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
