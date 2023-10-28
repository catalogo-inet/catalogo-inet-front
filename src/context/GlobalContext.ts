import { createContext } from "react";
import { Institucion } from "@/types";
export const GlobalContext = createContext({
  showMap: true,
  popup: false,
  instituciones: [] as Institucion[],
  instError: false,
  instLoading: false,
  setPopup: (state: boolean) => {},
  setShowMap: (state: boolean) => {},
});
