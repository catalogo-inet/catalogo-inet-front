import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Label,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  Select,
} from "@/components/ui";
import { useFetch } from "@/hooks/useFetch";
import { useFilters } from "@/hooks/useFilters";
import { SvgFiltros } from "../assets/icons/SvgIcons";
import { HandleError } from "./handleError";
import { HandleLoading } from "./HandleLoading";

const tiposInstitucion = [
  "Secundaria",
  "Tecnicatura superior",
  "Formacion superior",
];

export const FilterSheet = () => {
  const { data, isLoading, hasError } = useFetch(
    `http://localhost:7000/api/jurisdicciones`
  );

  const { filters } = useFilters();

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
            <div className="flex flex-col items-center">
              <Select>
                <SelectTrigger className=" rounded-[5px]">
                  <SelectValue placeholder="Orientacion" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    <SelectLabel>Selecciona una orientación</SelectLabel>
                    {tiposInstitucion.map((tipo, i) => {
                      return (
                        <SelectItem key={i} value={tipo}>
                          {tipo}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col items-center max-h-44 overflow-scroll">
              <Select>
                <SelectTrigger className=" rounded-[5px]">
                  <SelectValue placeholder="Orientacion" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    <SelectLabel>Selecciona una orientación</SelectLabel>
                    <HandleError hasError={hasError}>
                      <HandleLoading isLoading={isLoading}>
                        {data &&
                          data.map((item: any, i: number) => {
                            return (
                              <SelectItem key={i} value={item}>
                                {item}
                              </SelectItem>
                            );
                          })}
                      </HandleLoading>
                    </HandleError>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
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
