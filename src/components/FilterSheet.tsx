import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { Switch } from "@/components/ui/switch";
import { SvgFiltros } from "../../src/assets/icons/SvgIcons";
import { Label } from "@/components/ui/label";

export const FilterSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex py-1 px-2 shadow-md bg-white gap-2 rounded-[5px] overflow-hidden">
          <SvgFiltros />
          <Label className="text-black text-sm">Filtros</Label>
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
                  <Label htmlFor="secundaria" className="text-black text-sm">
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
                  <Label htmlFor="buenos-aires" className="text-black text-sm">
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
  );
};

export default FilterSheet;
