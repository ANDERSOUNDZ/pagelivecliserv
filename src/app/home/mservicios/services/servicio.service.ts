import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicio } from '../interfaces/Servicio';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  //private apiUrl: string = 'https://localhost:7198/api';
  private apiUrl: string = 'http://www.apiclienteservicio.somee.com/api';

  constructor(private httpClient: HttpClient) {}

  listaServicios(): Observable<Servicio[]> {
    const url = `${this.apiUrl}/Servicio/listaServicio`;
    return this.httpClient.get<Servicio[]>(url).pipe(catchError((error) => []));
  }

  obtenerServicio(id: number): Observable<Servicio> {
    const url = `${this.apiUrl}/Servicio/obtenerServicio/${id}`;
    return this.httpClient.get<Servicio>(url).pipe(catchError((error) => []));
  }

  crearServicio(servicio: Servicio): Observable<Servicio> {
    console.log(servicio, 'desdeElServicio');
    const url = `${this.apiUrl}/Servicio/agregarServicio`;
    return this.httpClient
      .post<Servicio>(url, servicio)
      .pipe(catchError((error) => []));
  }

  editarServicio(id: number, servicio: Servicio): Observable<Servicio> {
    const url = `${this.apiUrl}/Servicio/actualizarServicio/${id}`;
    return this.httpClient
      .put<Servicio>(url, servicio)
      .pipe(catchError((error) => []));
  }

  eliminarServicio(id: number){
    const url = `${this.apiUrl}/Servicio/eliminar/${id}`;
    return this.httpClient.delete(url);
  }
}
