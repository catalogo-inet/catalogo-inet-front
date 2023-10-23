import { useState } from "react";
import { FiltersContext } from "@/context/FiltersContext";

export const FiltersProvider = (props: any) => {
  const [filters, setFilters] = useState({
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

  const setFilterTrue = (property: any) => {
    setFilters({ ...filters, [property]: true });
  };

  const setFilterFalse = (property: any) => {
    setFilters({ ...filters, [property]: false });
  };

  return (
    <FiltersContext.Provider
      value={{
        setFilterTrue,
        setFilterFalse,
        filters,
      }}
    >
      {props.children}
    </FiltersContext.Provider>
  );
};
