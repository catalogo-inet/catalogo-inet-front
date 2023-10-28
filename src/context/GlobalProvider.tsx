"use client";

import { useState } from "react";
import { ReactNode } from "react";
import { useInstituciones } from "@/hooks/useInstituciones";
import { GlobalContext } from "./GlobalContext";

type Props = {
  children: ReactNode;
};

export const GlobalProvider = ({ children }: Props) => {
  const [popup, setPopup] = useState(false);
  const { instituciones, instError, instLoading } = useInstituciones({
    tipoInstitucion: "Superior Tecnico",
    codigoPostal: "7000",
    provincia: "Buenos Aires",
  });
  const [showMap, setShowMap] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
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
    </GlobalContext.Provider>
  );
};
