import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from '../../../services/servicio.service';
import { Servicio } from '../../../interfaces/Servicio';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-servicios-edit',
  templateUrl: './servicios-edit.component.html',
  styleUrl: './servicios-edit.component.css',
})
export class ServiciosEditComponent implements OnInit {
  public id!: number;
  public servicio!: Servicio;

  editForm: FormGroup = this.fb.group({
    nombreServicio: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
    descripcion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
    estado: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private servicioService: ServicioService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.servicioService.obtenerServicio(this.id).subscribe((servicio) => {
      this.servicio = servicio;

      this.editForm = this.fb.group({
        nombreServicio: [servicio.nombreServicio],
        descripcion: [servicio.descripcion],
        estado: [servicio.estado],
      });
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      const servicio: Servicio = {
        nombreServicio: this.editForm.get('nombreServicio')!.value,
        descripcion: this.editForm.get('descripcion')!.value,
        estado: this.editForm.get('estado')!.value,
      };

      this.servicioService.editarServicio(this.id, servicio).subscribe(() => {
        this.alertaMensaje('Servicio actualizado.', 'OK');
        this.router.navigate(['/listaservicio']);
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
