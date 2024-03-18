import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../interfaces/Cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../../services/clientes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteServicio } from '../../../interfaces/ClienteServicio';

@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrl: './clientes-edit.component.css'
})
export class ClientesEditComponent implements OnInit {
  public id!: number;
  public cliente!: Cliente;
  public servicioCliente: any;

  editForm: FormGroup = this.fb.group({
    nombreCliente: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
    correo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
    estado: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClientesService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.obtenerCliente(this.id).subscribe((cliente) => {
      this.cliente = cliente;
      this.editForm = this.fb.group({
        nombreCliente: [cliente.nombreCliente],
        correo: [cliente.correo],
        estado: [cliente.estado],
      });
    });
    this.clienteService.obtenerServicioCliente(this.id).subscribe((serviciosCliente) =>{
      console.log(serviciosCliente.servicios);
      this.servicioCliente = serviciosCliente.servicios;
    }
    );
  }

  onSubmit() {
    if (this.editForm.valid) {
      const cliente: Cliente = {
        nombreCliente: this.editForm.get('nombreCliente')!.value,
        correo: this.editForm.get('correo')!.value,
        estado: this.editForm.get('estado')!.value,
      };

      this.clienteService.editarCliente(this.id, cliente).subscribe(() => {
        this.alertaMensaje('Cliente actualizado.', 'OK');
        this.router.navigate(['/listascliente']);
      });
    }
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
