import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from '../../../../mservicios/services/servicio.service';
import { Servicio } from '../../../../mservicios/interfaces/Servicio';
import { ClientesservicioService } from '../../../../mcliserv/services/clientesservicio.service';
import { ClienteServicioLista } from '../../../../mcliserv/interfaces/ClienteServicioLista';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-clientes-asignarservicio',
  templateUrl: './clientes-asignarservicio.component.html',
  styleUrl: './clientes-asignarservicio.component.css',
})
export class ClientesAsignarservicioComponent implements OnInit {
  public servicios: Servicio[] = [];
  public serviciosCliente!: ClienteServicioLista;
  asignarForm: FormGroup = this.fb.group({
    servicioId: ['', [Validators.required] ],
  });

  public idCliente!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private servicioService: ServicioService,
    private servicioClienteServicio: ClientesservicioService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    this.cargarlistaServicios();
  }
  ngOnInit(): void {
    this.cargarListaServiciosCliente();
  }

  cargarlistaServicios() {
    this.servicioService.listaServicios().subscribe((servicios) => {
      this.servicios = servicios;
      console.log(servicios);
    });
  }

  cargarListaServiciosCliente() {
    let id = this.route.snapshot.params['id'];
    this.servicioClienteServicio
      .obtenerServiciosCliente(id)
      .subscribe((serviciosCliente) => {
        this.serviciosCliente =  serviciosCliente;
        console.log(serviciosCliente);
      });
  }

  onSubmit(): void {
    const cliente: ClienteServicioLista = {
      idCliente: this.route.snapshot.params['id'],
      idServicio: this.asignarForm.get('servicioId')!.value,
    };
    console.log(cliente);
    this.servicioClienteServicio.agregarServicioCliente(cliente).subscribe({
      next: () => {
        this.alertaMensaje('Servicio asignado exitosamente!', 'OK');
        this.router.navigate(['/cliente/listascliente']);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 400) {
          this.alertaMensaje(
            'SERVICIO YA ASIGNADO EN ESTE CLIENTE!',
            'OK'
          );
        } else {
          this.snackBar.open(
            'MENSAJE: ' +
              'EL SERVICIO YA SE ENCUENTRA ASIGNADO EN ESTE CLIENTE!',
            'CERRAR',
            {
              duration: 10000,
            }
          );
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

}
