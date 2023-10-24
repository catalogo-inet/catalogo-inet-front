"use client";
import { useFetch } from "./useFetch";

interface Props {
  filters: {
    tiposInstitucion: string;
    codigoPostal: string;
    provincia: string;
  };
}

export function useInstituciones({ filters }: Props) {
  const { data, isLoading, hasError } = useFetch(
    `http://localhost:7000/api/instituciones?codigoPostal=${filters.codigoPostal}`,
    filters
  );
  return { instituciones: data, instLoading: isLoading, instError: hasError };
}
