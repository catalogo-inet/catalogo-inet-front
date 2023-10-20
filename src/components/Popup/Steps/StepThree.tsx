import { Input, Label } from "@/components/ui";
import React from "react";

export const StepThree = ({ setSteps }) => {
  return (
    <>
      <Label className="text-black text-sm">
        Por favor, da acceso a tu ubicación o ingresa tu código postal
      </Label>
      <div>
        <Input type="number" placeholder="Código postal" />
        <button
          onClick={() => {
            setSteps(4);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default StepThree;
