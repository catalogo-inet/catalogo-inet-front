import { useState } from "react";
import { FiltersState, FiltersContext } from "@/context/FiltersContext";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

interface institucion {
  id: number;
  nombre: string;
  fundacion: number;
  orientaciones: string;
  direccion: string;
  localidad: string;
  codigoPostal: string;
  descripcion: string;
  jurisdiccion: string;
  tipo: string;
  gestion: string;
  lat: string;
  lon: string;
}

export const FiltersProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState<FiltersState>({
    tiposInstitucion: {
      SecundariaTecnica: false,
      EPS: false,
      FP: false,
      Superior: false,
    },
    codigoPostal: 7000,
    provincia: "Buenos Aires",
  });
  const [popup, setPopup] = useState(false);

<<<<<<< HEAD
  const [intituciones, setIntituciones] = [];

  const setFilterProvince = (province: string) => {
    setFilters((currentFilters) => {
      return { ...currentFilters, provincia: province };
    });
  };
  return (
    <FiltersContext.Provider
      value={{
        setFilterProvince,
=======
  const toggleTiposState = (property) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      tiposInstitucion: {
        ...prevFilters.tiposInstitucion,
        [property]: !prevFilters.tiposInstitucion[property],
      },
    }));
  };

  const toggleProvinciasState = (property) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      provincias: {
        ...prevFilters.provincias,
        [property]: !prevFilters.provincias[property],
      },
    }));
  };

  return (
    <FiltersContext.Provider
      value={{
        toggleProvinciasState,
        toggleTiposState,
>>>>>>> 2bed118dc90477bca63d5191663328153e2815bc
        filters,
        popup,
        setPopup,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
