"use client";

import { CardFormation } from "./CardFormation";
import { useFilters } from "@/hooks/useFilters";

const list = [
  {
    id: 9,
    city: "Buenos Aires",
    name: "Escuela Técnica Otto Krause",
    location: "Av. Garay N° 1507",
    province: "Buenos Aires",
    phone: "+54 11 4932-1513",
    email: "info@eotokrause.com.ar",
  },
  {
    id: 60,
    city: "Córdoba",
    name: "Instituto Técnico Salesiano",
    location: "Constantino Carbel Nª 426",
    province: "Córdoba",
    phone: "+54 351 4280540",
    email: "info@itsc.edu.ar",
  },
  {
    id: 62,
    city: "Mendoza",
    name: "Escuela Técnica General Las Heras",
    location: "Rivadavia y Luis Braile",
    province: "Mendoza",
    phone: "+54 261 4201456",
    email: "etghmendoza@gmail.com",
  },
  {
    id: 91,
    city: "Rosario",
    name: "Escuela Técnica Superior Oro Verde",
    location: "Vélez Sarsfield Nº 1200",
    province: "Santa Fe",
    phone: "+54 341 4641546",
    email: "info@etsov.edu.ar",
  },
];

export function ListOfFormations() {
  const { instituciones } = useFilters();

  return (
    <div>
      <h1 className="text-black text-2xl font-semibold mt-10">
        Formacion profesional
      </h1>
      <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2 sm:justify-between my-5">
        {instituciones &&
          instituciones.map((formation, i) => {
            const {
              id,
              descripcion,
              nombre,
              localidad,
              jurisdiccion,
              direccion,
            } = formation;
            return (
              <CardFormation
                key={i}
                id={id}
                city={descripcion}
                name={nombre}
                direction={direccion}
                location={localidad}
                province={jurisdiccion}
                email="escuela@gmail.com"
                phone="+54 2494377662"
              />
            );
          })}
      </div>
    </div>
  );
}
