export interface InstitucionProp {
  id: number;
  city: string;
  name: string;
  direction: string;
  location: string;
  province: string;
  phone: string;
  email: string;
  tipo: string;
}

export interface FiltersState {
  tipoInstitucion: string;
  codigoPostal: string;
  provincia: string;
}

export interface Institucion {
  id: number;
  nombre: string;
  fundacion: number;
  orientaciones: string;
  direccion: string;
  localidad: string;
  codigoPostal: string;
  descripcion: string;
  jurisdiccion: string;
  tipo: string;
  gestion: string;
  lat: string;
  lon: string;
}
