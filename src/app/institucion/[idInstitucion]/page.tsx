"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minimap } from "@/components/Minimap";
import mockInstituciones from "@/mocks/intituciones.json";
import Link from "next/link";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useEffect } from "react";

const Detail = ({ params }: { params: { idInstitucion: number } }) => {
  const { setShowMap } = useGlobalContext();
  const { idInstitucion } = params;
  const [filterIntitucion] = mockInstituciones?.filter(
    (i) => i.id == idInstitucion
  );
  const arrayOrientaciones = filterIntitucion!.orientaciones.split(",");

  useEffect(() => {
    setShowMap(false);
  }, [setShowMap]);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pl-2">
        <div className="w-10 h-10 flex justify-center items-center rounded-full shadow-md hover:scale-105">
          <Link href="/" className="text-lg font-bold">
            ←
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-start mt-5">
          <div className="flex flex-col">
            <h1 className="text-black text-4xl font-bold">
              {filterIntitucion && filterIntitucion.nombre}
            </h1>
            <h2 className="mt-2 text-xl text-[var(--color-blue)]">
              Carreras disponibles
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Orientaciones</AccordionTrigger>
                {arrayOrientaciones.map((orientacion: string, i: number) => {
                  return (
                    <AccordionContent key={i}>{orientacion}</AccordionContent>
                  );
                })}
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-60 h-60">
            {filterIntitucion && filterIntitucion.lat ? (
              <Minimap
                lat={parseInt(filterIntitucion.lat)}
                lon={parseInt(filterIntitucion.lon)}
              />
            ) : (
              <h1>Coordenadas no encontradas</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
