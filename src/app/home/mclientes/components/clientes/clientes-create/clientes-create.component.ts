import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../interfaces/Cliente';
import { ClientesService } from '../../../services/clientes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrl: './clientes-create.component.css'
})
export class ClientesCreateComponent implements OnInit{

  public servicio!: Cliente;

constructor(
  private servicioService: ClientesService,
    private snackBar: MatSnackBar,
    private route: Router
){

}

formularioCliente: FormGroup = new FormGroup({
  nombreCliente: new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(30),
  ]),
  correo: new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(10),
    Validators.maxLength(40),
  ]),
  estado: new FormControl('', [Validators.required]),
});

  ngOnInit(): void {

  }

  guardarCliente(): void {
    if (this.formularioCliente.invalid) {
      this.alertaMensaje('Porfavor llenar el formulario.', 'Error');
      return;
    }

    const cliente: Cliente = {
      nombreCliente: this.formularioCliente.value.nombreCliente,
      correo: this.formularioCliente.value.correo,
      estado: this.formularioCliente.value.estado === 'true' ? true : false,
    };

    this.servicioService.crearCliente(cliente).subscribe({
      next: (resp) => {
        this.alertaMensaje('Cliente creado.', 'OK');
        this.formularioCliente.reset();
        this.route.navigate(['/cliente/listascliente']);
      },
      error: (e) => {
        this.alertaMensaje('No se puede crear el cliente.', 'Error');
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
