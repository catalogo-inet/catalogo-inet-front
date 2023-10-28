import { createContext } from "react";
import { FiltersState } from "@/types";
export const FiltersContext = createContext({
  filters: {} as FiltersState,
  setFilterProvince: (province: string) => {},
  setFilterCodigoPostal: (codigoPostal: string) => {},
  setFilterTipoInstitucion: (tipoInstitucion: string) => {},
});
