import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  ScrollArea,
} from "@/components/ui";

import mockJurisdicciones from "@/mocks/jurisdicciones.json";

import React, { useState } from "react";
import { useFilters } from "@/hooks/useFilters";
export const StepThree = () => {
  const { popup, setPopup, setFilterProvince } = useFilters();
  const [provincia, setProvincia] = useState("Buenos Aires");

  const handleSelectChange = (provincia: string) => {
    setProvincia(provincia);
  };

  const handleClick = () => {
    setPopup(true);
    setFilterProvince(provincia);
    console.log(provincia);
  };

  return (
    <>
      <Label className="text-black font-bold text-2xl mb-5">
        ¿En que provincia querés buscar?
      </Label>
      <div className="flex flex-col mt-5 space-y-4 max-w-xs">
        <Select onValueChange={(e) => handleSelectChange(e)}>
          <SelectTrigger className="rounded-[5px]">
            <SelectValue placeholder="Provincia" />
          </SelectTrigger>
          <SelectContent className="bg-white overflow-y-auto max-h-[15rem]">
            <SelectGroup>
              <SelectLabel>Selecciona una provincia</SelectLabel>

              {mockJurisdicciones.map((item, i: number) => {
                return (
                  <SelectItem key={i} value={item.nombre}>
                    {item.nombre}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        <button
          onClick={() => {
            handleClick();
          }}
          className="bg-[var(--color-blue)] text-white px-2 py-1 rounded-[5px]"
        >
          Finalizar
        </button>
      </div>
    </>
  );
};

export default StepThree;
