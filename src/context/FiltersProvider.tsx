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
  const { instituciones, instError, instLoading } = useInstituciones({
    filters,
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

  return (
    <FiltersContext.Provider
      value={{
        setFilterProvince,
        setFilterCodigoPostal,
        filters,
        popup,
        setPopup,
        instituciones,
        instLoading,
        instError,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
