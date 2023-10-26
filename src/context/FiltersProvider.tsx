import { useState } from "react";
import { FiltersState, FiltersContext } from "@/context/FiltersContext";
import { ReactNode } from "react";
import { useInstituciones } from "@/hooks/useInstituciones";

type Props = {
  children: ReactNode;
};

export const FiltersProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState<FiltersState>({
    tipoInstitucion: "Superior Tecnico",
    codigoPostal: "900",
    provincia: "Buenos Aires",
  });
  const [popup, setPopup] = useState(false);
  const { instituciones, instError, instLoading } = useInstituciones({
    filters,
  });
  const [showMap, setShowMap] = useState(true);

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
  console.log({ filters, instituciones });

  return (
    <FiltersContext.Provider
      value={{
        setFilterProvince,
        setFilterCodigoPostal,
        setFilterTipoInstitucion,
        filters,
        popup,
        setPopup,
        instituciones,
        instLoading,
        instError,
        showMap,
        setShowMap,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
