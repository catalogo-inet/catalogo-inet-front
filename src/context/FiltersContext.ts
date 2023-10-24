import { createContext } from "react";

export interface FiltersState {
  tiposInstitucion: string;
  codigoPostal: string;
  provincia: string;
}

export const FiltersContext = createContext({
  popup: false,
  filters: {} as FiltersState, // Initialize with an empty FiltersState
  setFilterProvince: (province: string) => {}, // Initialize with empty functions
  setFilterCodigoPostal: (codigoPostal: string) => {}, // Initialize with empty functions
  setPopup: (state: boolean) => {},
});
