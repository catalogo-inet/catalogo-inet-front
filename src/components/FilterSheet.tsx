import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Label,
  Switch,
} from "@/components/ui";
import { useFetch } from "@/hooks/useFetch";
import { useFilters } from "@/hooks/useFilters";
import { SvgFiltros } from "../assets/icons/SvgIcons";

export const FilterSheet = () => {
  const { data, isLoading, hasError } = useFetch(
    `http://localhost:7000/api/jurisdicciones`
  );

  const { filters, toggleTiposState } = useFilters();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex py-1 px-2 shadow-md bg-white gap-2 rounded-[5px] overflow-hidden">
          <SvgFiltros />
          <Label className="text-black text-sm">Filtros</Label>
        </button>
      </SheetTrigger>
      <SheetContent className="h-[100%] bg-white shadow-md text-black z-50">
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
                  <Switch
                    id="tecnicatura-superior"
                    checked={filters.tiposInstitucion.Superior}
                    onClick={() => {
                      toggleTiposState("Superior");
                    }}
                  />
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
                  {!isLoading &&
                    data.map((item: any) => {
                      return (
                        <>
                          <Switch id={item.Descripcion} />
                          <Label
                            htmlFor={item.Descripcion}
                            className="text-black text-sm"
                          >
                            {item.Descripcion}
                          </Label>
                        </>
                      );
                    })}
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
