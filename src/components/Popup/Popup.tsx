import { useState } from "react";
import { StepOne, StepTwo, StepThree } from "./Steps";
import { Cross } from "@/assets/icons/SvgIcons";

export const Popup = () => {
  const [steps, setSteps] = useState(1);
  return steps <= 3 ? (
    <div className="p-5 flex justify-between w-[50vw] h-[70vh] text-black rounded-xl shadow-md bg-white items-center gap-4">
      <button
        onClick={() => {
          setSteps(4);
        }}
        className="relative w-[57px] h-[57px]"
      >
        <Cross className={{ height: 20, width: 20 }} />
      </button>

      {steps === 1 && <StepOne setSteps={setSteps} />}
      {steps === 2 && <StepTwo setSteps={setSteps} />}
      {steps === 3 && <StepThree setSteps={setSteps} />}
    </div>
  ) : null;
};

export default Popup;
