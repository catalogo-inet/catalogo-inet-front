"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/Layout";
import { Minimap } from "@/components/Minimap";
import { HandleError } from "@/components/HandleError";
import { HandleLoading } from "@/components/HandleLoading";
import { useFilters } from "@/hooks/useFilters";
import { geocodeDireccion } from "@/lib/getCoordenates";
import { useEffect, useState } from "react";

const Detail = ({ params }: { params: { idInstitucion: number } }) => {
  const { idInstitucion } = params;
  const { instituciones, instError, instLoading } = useFilters();
  if (!instituciones) window.location = "../";
  const [filterIntitucion] = instituciones.filter((i) => i.id == idInstitucion);
  const arrayOrientaciones = filterIntitucion!.orientaciones.split(",");

  return (
    <Layout>
      <div className="mt-10">
        <h1 className="text-black text-4xl mt-10 font-bold">
          {filterIntitucion && filterIntitucion.nombre}
        </h1>
        <h2 className="mt-2 text-xl text-[var(--color-blue)]">
          Carreras disponibles
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Orientaciones</AccordionTrigger>
            {instituciones &&
              arrayOrientaciones.map((orientacion: string, i: number) => {
                return (
                  <AccordionContent key={i}>{orientacion}</AccordionContent>
                );
              })}
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-50 h-screen">
        <HandleError hasError={instError}>
          <HandleLoading isLoading={instLoading}>
            {filterIntitucion && filterIntitucion.lat ? (
              <Minimap lat={filterIntitucion.lat} lon={filterIntitucion.lon} />
            ) : (
              <h1>Coordenadas no encontradas</h1>
            )}
          </HandleLoading>
        </HandleError>
      </div>
    </Layout>
  );
};

export default Detail;
