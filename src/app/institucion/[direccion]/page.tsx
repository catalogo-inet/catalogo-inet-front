"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/Layout";
import { useFetch } from "@/hooks/useFetch";

const Detail = ({ params }) => {
  const { direccion } = params;
  const direccionDecodificada = decodeURIComponent(direccion);
  const { data, isLoading, hasError } = useFetch(
    `http://localhost:7000/api/direcciones/${direccionDecodificada}`
  );

  return (
    <Layout>
      <div className="mt-10">
        <h1>Escuela</h1>
        <h2>{data && data[0].nombre}</h2>
        <h2>Carreras disponibles</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item</AccordionTrigger>
            <AccordionContent>Descripción</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
};

export default Detail;
