import { Input, Label } from "@/components/ui";
import React from "react";

export const StepThree = ({ setSteps }) => {
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
        />
        <button
          onClick={() => {
            setSteps(4);
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