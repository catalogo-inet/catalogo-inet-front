import { createContext } from "react";

export interface FiltersState {
  tiposInstitucion: {
    SecundariaTecnica: boolean;
    EPS: boolean;
    FP: boolean;
    Superior: boolean;
  };
  codigoPostal: number;
  provincia: string;
}

export const FiltersContext = createContext({
  popup: false,
  filters: {} as FiltersState, // Initialize with an empty FiltersState
  setFilterProvince: (province: string) => {}, // Initialize with empty functions
  setPopup: (state: boolean) => {},
});
