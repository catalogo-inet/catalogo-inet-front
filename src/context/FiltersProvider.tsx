"use client";

import { useState } from "react";
import { FiltersContext } from "@/context/FiltersContext";
import { FiltersState } from "@/types";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const FiltersProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState<FiltersState>({
    tipoInstitucion: "Superior Tecnico",
    codigoPostal: "7000",
    provincia: "Buenos Aires",
  });

  const setFilterProvince = (province: string) => {
    setFilters((currentFilters) => {
      return { ...currentFilters, provincia: province };
    });
  };

  const setFilterCodigoPostal = (codigoPostal: string) => {
    setFilters((currentFilters) => {
      return { ...currentFilters, codigoPostal: codigoPostal };
    });
  };

  const setFilterTipoInstitucion = (tipoInstitucion: string) => {
    setFilters((currentFilters) => {
      return { ...currentFilters, tipoInstitucion: tipoInstitucion };
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        setFilterProvince,
        setFilterCodigoPostal,
        setFilterTipoInstitucion,
        filters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
