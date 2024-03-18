import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Cliente } from '../interfaces/Cliente';
import { ClienteServicio } from '../interfaces/ClienteServicio';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  //private apiUrl: string = 'https://localhost:7198/api';
  private apiUrl: string = 'http://www.apiclienteservicio.somee.com/api';


  constructor(private httpClient: HttpClient) {}

  listaCliente(): Observable<Cliente[]> {
    const url = `${this.apiUrl}/Cliente/listaCliente`;
    return this.httpClient.get<Cliente[]>(url).pipe(catchError((error) => []));
  }

  obtenerCliente(id: number): Observable<Cliente> {
    const url = `${this.apiUrl}/Cliente/obtenerCliente/${id}`;
    return this.httpClient.get<Cliente>(url).pipe(catchError((error) => []));
  }

  obtenerServicioCliente(id: number): Observable<ClienteServicio> {
    const url = `${this.apiUrl}/ClienteServicio/ListaClienteServicios/${id}`;
    return this.httpClient.get<ClienteServicio>(url).pipe(catchError((error) => []));
  }

  crearCliente(servicio: Cliente): Observable<Cliente> {
    console.log(servicio, 'desdeElServicio');
    const url = `${this.apiUrl}/Cliente/agregarCliente`;
    return this.httpClient
      .post<Cliente>(url, servicio)
      .pipe(catchError((error) => []));
  }

  editarCliente(id: number, servicio: Cliente): Observable<Cliente> {
    const url = `${this.apiUrl}/Cliente/actualizarCliente/${id}`;
    return this.httpClient
      .put<Cliente>(url, servicio)
      .pipe(catchError((error) => []));
  }

  eliminarCliente(id: number) {
    const url = `${this.apiUrl}/Cliente/eliminar/${id}`;
    return this.httpClient.delete(url);
  }
}
