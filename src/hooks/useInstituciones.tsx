"use client";
import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
interface institucion {
  id: number;
  nombre: string;
  fundacion: number;
  orientaciones: string;
  direccion: string;
  localidad: string;
  codigoPostal: string;
  descripcion: string;
  jurisdiccion: string;
  tipo: string;
  gestion: string;
  lat: string;
  lon: string;
}

export function useInstituciones({ filters }) {
  const { data, isLoading, hasError } = useFetch(
    `http://localhost:7000/api/instituciones?codigoPostal=${filters.codigoPostal}`, filters
  );
  return { instituciones: data };
}
