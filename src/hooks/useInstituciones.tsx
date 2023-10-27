"use client";
import { useEffect, useState } from "react";
import mockInstituciones from "@/mocks/intituciones.json";
import { FiltersState } from "@/types";

export function useInstituciones(filters: FiltersState) {
  const [instituciones, setInstituciones] = useState<FiltersState[]>();
  useEffect(() => {
    const sortedInstituciones = mockInstituciones.slice(); // Clonar el array para no modificar el original

    sortedInstituciones.sort((a, b) => {
      if (
        a.jurisdiccion === filters.provincia &&
        b.jurisdiccion !== filters.provincia
      ) {
        return -1; // a viene antes que b
      } else if (
        a.jurisdiccion !== filters.provincia &&
        b.jurisdiccion === filters.provincia
      ) {
        return 1; // b viene antes que a
      } else {
        // Si ambas tienen la misma jurisdicción, comparamos por tipo o cualquier otro criterio de ordenamiento
        // En este ejemplo, no se especifica un segundo criterio, por lo que si la jurisdicción es igual, no se cambia el orden de a y b
        return 0;
      }
    });
    const filterInstituciones = sortedInstituciones.filter(
      (i) => i.tipo == filters.tipoInstitucion
    );
    setInstituciones(filterInstituciones);
  }, [filters]);
  return {
    instituciones,
    instLoading: false,
    instError: false,
  };
}
