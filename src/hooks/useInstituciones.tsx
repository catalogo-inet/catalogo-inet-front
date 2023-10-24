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
  return { instituciones, instLoading: false, instError: false };
}
