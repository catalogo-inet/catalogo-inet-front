import { useState } from "react";
import { FiltersState, FiltersContext } from "@/context/FiltersContext";

export const FiltersProvider = (props) => {
  const [filters, setFilters] = useState<FiltersState>({
    tiposInstitucion: {
      SecundariaTecnica: true,
      EPS: true,
      FP: true,
      Superior: true,
    },
    codigoPostal: 7000,
    provincias: {
      ciudadBuenosAires: false,
      buenosAires: false,
      catamarca: false,
      chaco: false,
      chubut: false,
      cordoba: false,
      corrientes: false,
      entreRios: false,
      formosa: false,
      jujuy: false,
      laPampa: false,
      laRioja: false,
      mendoza: false,
      misiones: false,
      neuquen: false,
      rioNegro: false,
      salta: false,
      sanJuan: false,
      sanLuis: false,
      santaCruz: false,
      santaFe: false,
      santiagoDelEstero: false,
      tucuman: false,
      tierraDelFuego: false,
    },
  });

  const setFilterTrue = (property) => {
    setFilters({
      ...filters,
      tiposInstitucion: {
        ...filters.tiposInstitucion,
        [property]: true,
      },
      provincias: {
        ...filters.provincias,
        [property]: true,
      },
    });
  };

  const setFilterFalse = (property) => {
    setFilters({
      ...filters,
      tiposInstitucion: {
        ...filters.tiposInstitucion,
        [property]: false,
      },
      provincias: {
        ...filters.provincias,
        [property]: false,
      },
    });
  };

  const toggleFilterState = (property) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      tiposInstitucion: {
        ...prevFilters.tiposInstitucion,
        [property]: !prevFilters.tiposInstitucion[property],
      },
      provincias: {
        ...prevFilters.provincias,
        [property]: !prevFilters.provincias[property],
      },
    }));
  };

  return (
    <FiltersContext.Provider
      value={{
        setFilterTrue: () => setFilterTrue,
        toggleFilterState: () => toggleFilterState,
        setFilterFalse: () => setFilterFalse,
        filters,
      }}
    >
      {props.children}
    </FiltersContext.Provider>
  );
};
