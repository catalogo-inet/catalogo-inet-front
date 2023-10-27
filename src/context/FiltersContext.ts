import { createContext } from "react";
import { FiltersState } from "@/types";
import { Institucion } from "@/types";
export const FiltersContext = createContext({
  showMap: true,
  popup: false,
  instituciones: [],
  instError: false,
  instLoading: false,
  filters: {} as FiltersState, // Initialize with an empty FiltersState
  setFilterProvince: (province: string) => {}, // Initialize with empty functions
  setFilterCodigoPostal: (codigoPostal: string) => {}, // Initialize with empty functions
  setFilterTipoInstitucion: (tipoInstitucion: string) => {},
  setPopup: (state: boolean) => {},
  setShowMap: (state: boolean) => {},
});
