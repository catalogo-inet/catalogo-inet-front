import { useState } from "react";
import { StepOne, StepTwo, StepThree } from "./Steps";
import { Cross } from "@/assets/icons/SvgIcons";

export const Popup = () => {
  const [steps, setSteps] = useState(1);
  return steps <= 3 ? (
    <div className="fixed top-0 w-full h-screen z-50 backdrop-blur-sm flex justify-center items-center">
      <div className="relative px-10 py-16 max-w-3xl flex justify-between w-11/12 h-3/4 text-black rounded-xl shadow-md bg-white items-center gap-4">
        <button
          onClick={() => {
            setSteps(4);
          }}
          className="absolute top-3 left-10 w-[57px] h-[57px]"
        >
          <Cross className={{ height: 20, width: 20 }} />
        </button>
        <div className="mt-10">
          {steps === 1 && <StepOne setSteps={setSteps} />}
          {steps === 2 && <StepTwo setSteps={setSteps} />}
          {steps === 3 && <StepThree setSteps={setSteps} />}
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
