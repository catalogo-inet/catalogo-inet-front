import { useState } from "react";
import { StepOne, StepTwo, StepThree } from "./Steps";
import { Cross } from "@/assets/icons/SvgIcons";

export const Popup = () => {
  const [steps, setSteps] = useState(1);
  return steps <= 3 ? (
    <div className="fixed top-0 w-full min-h-screen z-50 bg-[#222d] md:flex md:justify-center md:items-center overflow-y-auto max-h-[90vh]">
      <div className="relative top-0 px-10 py-16 max-w-3xl w-full md:w-11/12 h:full md:h-3/4 text-black rounded-none md:rounded-xl shadow-md bg-white items-center gap-4">
        {/*<button
          onClick={() => {
            setSteps(4);
          }}
          className="absolute top-3 left-10 w-[57px] h-[57px]"
        >
          <Cross className={{ height: 20, width: 20 }} />
        </button>*/}
        <div className="mt-10">
          {steps === 1 && <StepOne setSteps={setSteps} />}
          {steps === 2 && <StepTwo setSteps={setSteps} />}
          {steps === 3 && <StepThree />}
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
