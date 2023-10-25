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
  Input,
} from "@/components/ui";
import mockJurisdicciones from "@/mocks/jurisdicciones.json";
import { SvgFiltros } from "../assets/icons/SvgIcons";
import { useFilters } from "@/hooks/useFilters";
import { useState } from "react";

const tiposInstitucion = [
  "Secundaria",
  "Tecnicatura superior",
  "Formacion superior",
];

export const FilterSheet = () => {
  // const { data, isLoading, hasError } = useFetch(
  //   `http://localhost:7000/api/jurisdicciones`,
  //   tiposInstitucion
  // );
  const { setFilterProvince } = useFilters();
  const [provincia, setProvincia] = useState("Buenos Aires");
  const handleSelectChange = (provincia: string) => {
    setProvincia(provincia);
  };

  const handleSubmit = () => {
    setFilterProvince(provincia);
  };

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
          <div className="grid gap-4">
            <div className="flex flex-col">
              <Label className="text-black font-bold text-xl mb-5">
                Tipo de institucion
              </Label>
              <Select>
                <SelectTrigger className=" rounded-[5px]">
                  <SelectValue placeholder="Orientacion" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    <SelectLabel>Selecciona una orientación</SelectLabel>
                    <SelectItem value="secundaria">Secundaria</SelectItem>
                    <SelectItem value="tecnicatura-superior">
                      Tecnicatura superior
                    </SelectItem>
                    <SelectItem value="formacion-superior">
                      Formacion superior
                    </SelectItem>
                    {/*{tiposInstitucion.map((tipo, i) => {
                      return (
                        <SelectItem key={i} value="tipo">
                          {tipo}
                        </SelectItem>
                      );
                    })}*/}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col">
              <Select onValueChange={(e) => handleSelectChange(e)}>
                <SelectTrigger className=" rounded-[5px]">
                  <SelectValue placeholder="Provincia" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    <SelectLabel>Selecciona una provincia</SelectLabel>
                    {mockJurisdicciones.map((item, i) => {
                      return (
                        <SelectItem key={i} value={item.nombre}>
                          {item.nombre}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <button
              onClick={handleSubmit}
              className="bg-[var(--color-blue)] text-white px-2 py-1 rounded-[5px]"
            >
              Guardar cambios
            </button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSheet;
