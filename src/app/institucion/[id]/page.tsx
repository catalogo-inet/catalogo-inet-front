"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Map } from "@/components/Map";

const Detail = ({ params }: { params: { id: number } }) => {
  const [showMap, setShowMap] = useState(false);

  const handleToggle = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="flex items-center space-x-2 ">
      <h1>Escuela</h1>
      <h2>{params.id}</h2>
      <h2>Carreras disponibles</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item</AccordionTrigger>
          <AccordionContent>Descripción</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Switch id="activar-mapa" onClick={handleToggle} />
      <Label htmlFor="activar-mapa">Activar mapa</Label>
      {showMap && <Map />}
    </div>
  );
};

export default Detail;
