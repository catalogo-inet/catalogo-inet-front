import { Input, Label } from "@/components/ui";
import React, { useState } from "react";
import { useFilters } from "@/hooks/useFilters";
export const StepThree = () => {
  const { popup, setPopup, setFilterCodigoPostal } = useFilters();
  const [cp, setCp] = useState("");

  const handleClick = () => {
    setPopup(true);
    setFilterCodigoPostal(cp);
  };

  return (
    <>
      <Label className="text-black font-bold text-2xl mb-5">
        Por favor, da acceso a tu ubicación o ingresa tu código postal
      </Label>
      <div className="flex flex-col mt-5 space-y-4 max-w-xs">
        <Input
          type="number"
          placeholder="Código postal"
          className="rounded-[5px]"
          onChange={(e) => setCp(e.target.value)}
        />
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
