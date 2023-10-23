"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/Layout";
import { useFetch } from "@/hooks/useFetch";
import { Minimap } from "@/components/Minimap";
import { HandleError } from "@/components/handleError";

const Detail = ({ params }: { params: { idInstitucion: number } }) => {
  const { idInstitucion } = params;
  const { data, isLoading, hasError } = useFetch(
    `http://localhost:7000/api/instituciones/${idInstitucion}`
  );

  const arrayOrientaciones = data?.orientaciones.split(",");

  return (
    <Layout>
      <div className="mt-10">
        <h1 className="text-black text-4xl mt-10 font-bold">
          {data && data.Nombre}
        </h1>
        <h2 className="mt-2 text-xl text-[var(--color-blue)]">
          Carreras disponibles
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Orientaciones</AccordionTrigger>
            {data &&
              arrayOrientaciones.map((orientacion: string, i: number) => {
                return (
                  <AccordionContent key={i}>{orientacion}</AccordionContent>
                );
              })}
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-50 h-screen">
        <HandleError hasError={hasError}>
          data.lat ? (
          <Minimap lat={data.lat} lon={data.lon} />) : (
          <h1>Coordenadas no encontradas</h1>)
        </HandleError>
      </div>
    </Layout>
  );
};

export default Detail;
