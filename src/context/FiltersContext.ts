import { createContext } from "react";

export interface FiltersState {
  tiposInstitucion: {
    SecundariaTecnica: boolean;
    EPS: boolean;
    FP: boolean;
    Superior: boolean;
  };
  codigoPostal: number;
  provincias: {
    ciudadBuenosAires: boolean;
    buenosAires: boolean;
    catamarca: boolean;
    chaco: boolean;
    chubut: boolean;
    cordoba: boolean;
    corrientes: boolean;
    entreRios: boolean;
    formosa: boolean;
    jujuy: boolean;
    laPampa: boolean;
    laRioja: boolean;
    mendoza: boolean;
    misiones: boolean;
    neuquen: boolean;
    rioNegro: boolean;
    salta: boolean;
    sanJuan: boolean;
    sanLuis: boolean;
    santaCruz: boolean;
    santaFe: boolean;
    santiagoDelEstero: boolean;
    tucuman: boolean;
    tierraDelFuego: boolean;
  };
}

export const FiltersContext = createContext({
  filters: {} as FiltersState,
  toggleProvinciasState: (property) => {},
  toggleTiposState: (property) => {},
});
