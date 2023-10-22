"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/Layout";
import { useFetch } from "@/hooks/useFetch";

const Detail = ({ params }: { params: { idInstitucion: number } }) => {
  const { idInstitucion } = params;
  const { data, isLoading, hasError } = useFetch(
    `http://localhost:7000/api/instituciones/${idInstitucion}`
  );

  return (
    <Layout>
      <div className="mt-10">
        <h1 className="text-black text-4xl mt-10 font-bold">
          {data && data.Nombre}
        </h1>
        <h2 className="mt-2">Carreras disponibles</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Orientaciones</AccordionTrigger>
            {data &&
              data.planes.map((plan, i) => {
                return (
                  <AccordionContent key={i}>{plan.nombre}</AccordionContent>
                );
              })}
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
};

export default Detail;
