import { createContext } from "react";
import { FiltersState } from "@/types";
export const FiltersContext = createContext({
  filters: {
    tipoInstitucion: "Superior Tecnico",
    codigoPostal: "7000",
    provincia: "Buenos Aires",
  } as FiltersState,
  setFilterProvince: (province: string) => {},
  setFilterCodigoPostal: (codigoPostal: string) => {},
  setFilterTipoInstitucion: (tipoInstitucion: string) => {},
});
