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
  ScrollArea,
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
  const { filters, setFilterProvince, setFilterTipoInstitucion } = useFilters();
  const [provincia, setProvincia] = useState(filters.provincia);
  const [tipo, setTipo] = useState(filters.tiposInstitucion);
  const handleSelectChange = (provincia: string) => {
    setProvincia(provincia);
  };

  const handleTipoChange = (value: string) => {
    setTipo(value);
  };

  const handleSubmit = () => {
    setFilterTipoInstitucion(tipo);
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
              <Select onValueChange={(e) => handleTipoChange(e)}>
                <SelectTrigger className=" rounded-[5px]">
                  <SelectValue placeholder="Tipo de institución" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    <SelectLabel>Selecciona tipo de institución</SelectLabel>
                    <SelectItem value="Secundario Tecnico">
                      Secundario Técnico
                    </SelectItem>
                    <SelectItem value="Superior Tecnico">
                      Tecnicatura superior
                    </SelectItem>
                    <SelectItem value="Formacion Profesional">
                      Formacion superior
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col">
              <Select onValueChange={(e) => handleSelectChange(e)}>
                <SelectTrigger className=" rounded-[5px]">
                  <SelectValue placeholder="Provincia" />
                </SelectTrigger>
                <SelectContent className="bg-white overflow-y-auto max-h-[15rem]">
                  <SelectGroup>
                    <SelectLabel>Selecciona una provincia</SelectLabel>
                    <ScrollArea>
                      {mockJurisdicciones.map((item, i) => {
                        return (
                          <SelectItem key={i} value={item.nombre}>
                            {item.nombre}
                          </SelectItem>
                        );
                      })}
                    </ScrollArea>
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
