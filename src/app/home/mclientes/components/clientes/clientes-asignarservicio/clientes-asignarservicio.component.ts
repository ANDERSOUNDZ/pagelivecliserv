import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from '../../../../mservicios/services/servicio.service';
import { Servicio } from '../../../../mservicios/interfaces/Servicio';
import { ClientesservicioService } from '../../../../mcliserv/services/clientesservicio.service';
import { ClienteServicioLista } from '../../../../mcliserv/interfaces/ClienteServicioLista';

@Component({
  selector: 'app-clientes-asignarservicio',
  templateUrl: './clientes-asignarservicio.component.html',
  styleUrl: './clientes-asignarservicio.component.css',
})
export class ClientesAsignarservicioComponent implements OnInit {
  public servicios: Servicio[] = [];
  public serviciosCliente!: ClienteServicioLista;
  asignarForm: FormGroup = this.fb.group({
    servicioId: [''],
  });

  public idCliente!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private servicioService: ServicioService,
    private servicioClienteServicio: ClientesservicioService,
    private router: Router
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
    this.servicioClienteServicio.agregarServicioCliente(cliente).subscribe();
    this.router.navigate(['/cliente/listascliente']);
  }
}
