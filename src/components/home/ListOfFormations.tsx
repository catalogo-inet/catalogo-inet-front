"use client";

import { CardFormation } from "./CardFormation";
import { useFilters } from "@/hooks/useFilters";
import { HandleError } from "@/components/HandleError";
import { HandleLoading } from "@/components/HandleLoading";

export function ListOfFormations() {
  const { instituciones, instLoading, instError } = useFilters();
  console.log(instituciones);
  return (
    <div>
      <h1 className="text-black text-2xl font-semibold mt-10">
        Formacion profesional
      </h1>
      <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2 sm:justify-between my-5 min-h-screen">
        <HandleError>
          <HandleLoading>
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
          </HandleLoading>
        </HandleError>
      </div>
    </div>
  );
}
