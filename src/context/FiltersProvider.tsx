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
    codigoPostal: 7000,
    provincia: "Buenos Aires",
  });
  const [popup, setPopup] = useState(false);

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
  return (
    <FiltersContext.Provider
      value={{
        setFilterProvince,
        setFilterCodigoPostal,
        filters,
        popup,
        setPopup,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
