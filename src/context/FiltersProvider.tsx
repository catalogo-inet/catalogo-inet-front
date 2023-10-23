import { useState } from "react";
import { FiltersState, FiltersContext } from "@/context/FiltersContext";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const FiltersProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState<FiltersState>({
    tiposInstitucion: {
      SecundariaTecnica: false,
      EPS: false,
      FP: false,
      Superior: false,
    },
    codigoPostal: undefined,
    provincia: undefined,
  });

  const setFilterProvince = (province: string) => {
    setFilters((currentFilters) => {
      return { ...currentFilters, provincia: province };
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        setFilterProvince,
        filters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
