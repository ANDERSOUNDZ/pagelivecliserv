import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteServicioLista } from '../interfaces/ClienteServicioLista';
import { Observable, catchError } from 'rxjs';
import { ClienteServicio } from '../../mclientes/interfaces/ClienteServicio';

@Injectable({
  providedIn: 'root'
})
export class ClientesservicioService {

  private apiUrl: string = 'https://www.apiclienteservicio.somee.com/api';

  constructor(private httpClient: HttpClient) { }

  listaClienteServicios(): Observable<ClienteServicioLista[]> {
    const url = `${this.apiUrl}/ClienteServicio/listacompletaserviciosclientes`;
    return this.httpClient.get<ClienteServicioLista[]>(url).pipe(catchError((error) => []));
  }

  obtenerServiciosCliente(id: number): Observable<ClienteServicioLista> {
    const url = `${this.apiUrl}/ClienteServicio/obtenerservicioscliente/${id}`;
    return this.httpClient.get<ClienteServicioLista>(url).pipe(catchError((error) => []));
  }

  obtenerServiciosClientes(id: number): Observable<ClienteServicio[]> {
    const url = `${this.apiUrl}/ClienteServicio/obtenerservicioscliente/${id}`;
    return this.httpClient.get<ClienteServicio[]>(url).pipe(catchError((error) => []));
  }

  cambiarEstadoServicio(idCliente: number, idServicio: number, estado: boolean){
    const url = `${this.apiUrl}/ClienteServicio/actualizarestadoservicio/${idCliente}/${idServicio}?estado=${estado}`;
    return this.httpClient
      .put(url,estado)
      .pipe(catchError((error) => []));
  }

  agregarServicioCliente(servicio: ClienteServicioLista): Observable<ClienteServicioLista> {
    console.log(servicio, 'desdeElServicio');
    const url = `${this.apiUrl}/ClienteServicio/agregarserviciocliente`;
    return this.httpClient
      .post<ClienteServicioLista>(url, servicio)
      .pipe(catchError((error) => []));
  }

  eliminarServiciosCliente(idCliente: number,idServicio: number) {
    const url = `${this.apiUrl}/ClienteServicio/EliminarServicio/${idCliente}/${idServicio}`;
    return this.httpClient.delete(url);
  }

}
