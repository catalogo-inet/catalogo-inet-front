import { createContext } from "react";
import { FiltersState } from "@/types";
import { Institucion } from "@/types";
export const FiltersContext = createContext({
  popup: false,
  instituciones: [] as Institucion[],
  instError: false,
  instLoading: false,
  filters: {} as FiltersState, // Initialize with an empty FiltersState
  setFilterProvince: (province: string) => {}, // Initialize with empty functions
  setFilterCodigoPostal: (codigoPostal: string) => {}, // Initialize with empty functions
  setPopup: (state: boolean) => {},
});
