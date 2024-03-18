export interface ClienteServicio {
  nombreCliente: string;
  servicios: Servicio[];
}

interface Servicio {
  nombreServicio: string;
  descripcion: string;
  estado: boolean;
}
