"use client";
import { useFetch } from "./useFetch";
import instituciones from "@/mocks/intituciones.json";
interface Props {
  filters: {
    tiposInstitucion: string;
    codigoPostal: string;
    provincia: string;
  };
}

export function useInstituciones({ filters }: Props) {
  const filterInstituciones = instituciones.filter(
    (i) => i.tipo == filters.tiposInstitucion
  );
  return {
    instituciones: filterInstituciones,
    instLoading: false,
    instError: false,
  };
}
