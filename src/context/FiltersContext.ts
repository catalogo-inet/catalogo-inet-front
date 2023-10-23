import { createContext } from "react";

export interface FiltersState {
  tiposInstitucion: {
    SecundariaTecnica: boolean;
    EPS: boolean;
    FP: boolean;
    Superior: boolean;
  };
  codigoPostal: number | undefined;
  provincia: string | undefined;
}

export const FiltersContext = createContext({
  filters: {} as FiltersState, // Initialize with an empty FiltersState
  setFilterTrue: (property) => {}, // Initialize with empty functions
  toggleFilterState: (property) => {},
  setFilterFalse: (property) => {},
});
