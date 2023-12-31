export interface InstitucionProp {
  id: number;
  city: string;
  name: string;
  direction: string;
  location: string;
  province: string;
  phone: string;
  email: string;
}

export interface FiltersState {
  tiposInstitucion: string;
  codigoPostal: string;
  provincia: string;
}

export interface Institucion {
  id: number;
  nombre: string;
  fundacion: string;
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
