"use client";
import { useEffect, useState } from "react";
import mockInstituciones from "@/mocks/intituciones.json";
import { Institucion } from "@/types";
import { useFilters } from "./useFilters";

export function useInstituciones() {
  const { filters } = useFilters();
  const [instituciones, setInstituciones] = useState<Institucion[]>();
  console.log({ filters, instituciones });
  useEffect(() => {
    const sortedInstituciones = mockInstituciones.slice();

    sortedInstituciones.sort((a, b) => {
      if (
        a.jurisdiccion === filters.provincia &&
        b.jurisdiccion !== filters.provincia
      ) {
        return -1;
      } else if (
        a.jurisdiccion !== filters.provincia &&
        b.jurisdiccion === filters.provincia
      ) {
        return 1;
      } else {
        return 0;
      }
    });

    const filterInstituciones = sortedInstituciones.filter(
      (i) => i.tipo === filters.tipoInstitucion
    );

    setInstituciones(filterInstituciones);
  }, [filters]);

  return {
    instituciones,
    instLoading: false,
    instError: false,
  };
}
