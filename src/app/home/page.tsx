"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Map } from "@/components/Map";
import { SvgFiltros } from "../assets/icons/SvgIcons";
import { ListOfFormations } from "@/components/ListOfFormations";

const Home = () => {
  const [showMap, setShowMap] = useState(false);

  const handleToggle = () => {
    setShowMap(!showMap);
  };

  return (
    <main className="min-h-screen bg-[var(--color-white)]">
      <header className="h-24 bg-gray-300"></header>
      <section className="relative">
        <div className="items-center w-full gap-2 flex justify-between p-3 z-50 sm:justify-end">
          <div className="bg-white rounded-full py-1 px-2 flex items-center gap-2">
            <div
              className={`${
                showMap ? "bg-blue-400" : "bg-gray-300"
              } rounded-full flex items-center shadow-md`}
            >
              <Switch id="activar-mapa" onClick={handleToggle} />
            </div>
            <Label htmlFor="activar-mapa" className="text-black text-sm">
              Mapa
            </Label>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex py-1 px-2 shadow-md bg-white gap-2 rounded-[5px] overflow-hidden">
                <SvgFiltros />
                <Label htmlFor="activar-mapa" className="text-black text-sm">
                  Filtros
                </Label>
              </button>
            </SheetTrigger>
            <SheetContent className="bg-white shadow-md text-black z-50">
              <SheetHeader>
                <SheetTitle>Filtros</SheetTitle>
                <SheetDescription>
                  Selecciona los filtros que se acomoden a tu búsqueda.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid  items-center gap-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Tipo de institución</AccordionTrigger>
                      <AccordionContent className="flex flex-col items-center">
                        <Switch id="secundaria" />
                        <Label
                          htmlFor="secundaria"
                          className="text-black text-sm"
                        >
                          Secundaria
                        </Label>
                        <Switch id="tecnicatura-superior" />
                        <Label
                          htmlFor="tecnicatura-superior"
                          className="text-black text-sm"
                        >
                          Tecnicatura superior
                        </Label>
                        <Switch id="formacion-profesional" />
                        <Label
                          htmlFor="formacion-profesional"
                          className="text-black text-sm"
                        >
                          Formación Profesional
                        </Label>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Provincia</AccordionTrigger>
                      <AccordionContent className="flex flex-col items-center">
                        <Switch id="buenos-aires" />
                        <Label
                          htmlFor="buenos-aires"
                          className="text-black text-sm"
                        >
                          Buenos Aires
                        </Label>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <button type="submit">Guardar cambios</button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </section>

      <div className="z-10">{showMap ? <Map /> : <ListOfFormations />}</div>
    </main>
  );
};

export default Home;
