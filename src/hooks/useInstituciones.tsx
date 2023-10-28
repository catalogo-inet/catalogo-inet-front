"use client";
import { useEffect, useState } from "react";
import mockInstituciones from "@/mocks/intituciones.json";
import { FiltersState } from "@/types";
import { Institucion } from "@/types";

export function useInstituciones(filters: FiltersState) {
  const [instituciones, setInstituciones] = useState<Institucion[]>();

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

    // Actualiza el estado con las instituciones filtradas
    setInstituciones(filterInstituciones);
  }, [filters]);

  return {
    instituciones,
    instLoading: false,
    instError: false,
  };
}
