"use client";
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import mockInstituciones from "@/mocks/intituciones.json";
interface Props {
  filters: {
    tiposInstitucion: string;
    codigoPostal: string;
    provincia: string;
  };
}

export function useInstituciones({ filters }: Props) {
  const [instituciones, setInstituciones] = useState();
  useEffect(() => {
    const filterInstituciones = mockInstituciones.filter(
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
