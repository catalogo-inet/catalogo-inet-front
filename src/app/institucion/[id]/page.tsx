"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Layout } from "@/components/Layout";

const Detail = ({ params }: { params: { id: number } }) => {
  return (
    <Layout>
      <h1>Escuela</h1>
      <h2>{params.id}</h2>
      <h2>Carreras disponibles</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item</AccordionTrigger>
          <AccordionContent>Descripción</AccordionContent>
        </AccordionItem>
      </Accordion>
    </Layout>
  );
};

export default Detail;
