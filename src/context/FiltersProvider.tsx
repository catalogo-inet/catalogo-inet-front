import { useState } from "react";
import { FiltersState, FiltersContext } from "@/context/FiltersContext";
import { ReactNode } from "react";
import { useInstituciones } from "@/hooks/useInstituciones";

type Props = {
  children: ReactNode;
};

export const FiltersProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState<FiltersState>({
    tiposInstitucion: "secundaria",
    codigoPostal: "900",
    provincia: "Buenos Aires",
  });
  const [popup, setPopup] = useState(false);
  const { instituciones } = useInstituciones({ filters });

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

  console.log({ filters, instituciones });
  return (
    <FiltersContext.Provider
      value={{
        setFilterProvince,
        setFilterCodigoPostal,
        filters,
        popup,
        setPopup,
        instituciones,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
