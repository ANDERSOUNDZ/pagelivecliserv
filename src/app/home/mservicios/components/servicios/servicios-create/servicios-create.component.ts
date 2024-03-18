import { Component } from '@angular/core';
import { Servicio } from '../../../interfaces/Servicio';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from '../../../services/servicio.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios-create',
  templateUrl: './servicios-create.component.html',
  styleUrl: './servicios-create.component.css',
})
export class ServiciosCreateComponent {
  public servicio!: Servicio;

  //public servicioEdit: any;

  constructor(
    private servicioService: ServicioService,
    private snackBar: MatSnackBar,
    private route: Router
  ) {}

  formularioServicio: FormGroup = new FormGroup({
    nombreServicio: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(30),
    ]),
    descripcionServicio: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(30),
    ]),
    estado: new FormControl('', [Validators.required]),
  });

  guardarServicio(): void {
    if (this.formularioServicio.invalid) {
      this.alertaMensaje('Porfavor llenar el formulario.', 'Error');
      return;
    }

    const servicio: Servicio = {
      nombreServicio: this.formularioServicio.value.nombreServicio,
      descripcion: this.formularioServicio.value.descripcionServicio,
      estado: this.formularioServicio.value.estado === 'true' ? true : false,
    };

    this.servicioService.crearServicio(servicio).subscribe({
      next: (resp) => {
        this.alertaMensaje('Servicio creado.', 'OK');
        this.formularioServicio.reset();
        this.route.navigate(['/listaservicio']);
      },
      error: (e) => {
        this.alertaMensaje('No se puede crear el servicio.', 'Error');
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
