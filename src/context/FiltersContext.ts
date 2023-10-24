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
<<<<<<< HEAD
  popup: false,
  filters: {} as FiltersState, // Initialize with an empty FiltersState
  setFilterProvince: (province: string) => {}, // Initialize with empty functions
  setPopup: (state: boolean) => {},
=======
  filters: {} as FiltersState,
  toggleProvinciasState: (property) => {},
  toggleTiposState: (property) => {},
>>>>>>> 2bed118dc90477bca63d5191663328153e2815bc
});
