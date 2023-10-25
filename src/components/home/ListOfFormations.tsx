"use client";

import { CardFormation } from "./CardFormation";
import { useFilters } from "@/hooks/useFilters";
import { HandleError } from "@/components/HandleError";
import { HandleLoading } from "@/components/HandleLoading";
import { Institucion } from "@/types";
export function ListOfFormations() {
  const { instituciones, instLoading, instError } = useFilters();
  return (
    <div>
      <h1 className="text-black text-2xl font-semibold mt-10">
        Formacion profesional
      </h1>
      <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2 sm:justify-between my-5 min-h-screen">
        <HandleError hasError={instError}>
          <HandleLoading isLoading={instLoading}>
            {instituciones &&
              instituciones.map((institucion: Institucion, i: number) => {
                const {
                  id,
                  descripcion,
                  nombre,
                  localidad,
                  jurisdiccion,
                  direccion,
                  tipo,
                } = institucion;
                return (
                  <CardFormation
                    key={i}
                    id={id}
                    city={descripcion}
                    name={nombre}
                    direction={direccion}
                    location={localidad}
                    province={jurisdiccion}
                    tipo={tipo}
                    email="escuela@gmail.com"
                    phone="+54 2494377662"
                  />
                );
              })}
          </HandleLoading>
        </HandleError>
      </div>
    </div>
  );
}
