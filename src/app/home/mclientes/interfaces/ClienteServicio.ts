export interface ClienteServicio {
  servicios: Servicio[];
}

interface Servicio {
  nombreServicio: string;
  descripcion: string;
  estado: boolean;
}
