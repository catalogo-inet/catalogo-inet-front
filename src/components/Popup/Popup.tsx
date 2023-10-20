import { useState } from "react";
import { StepOne, StepTwo, StepThree } from "./Steps";

export const Popup = () => {
  const [steps, setSteps] = useState(1);
  return steps <= 3 ? (
    <div className="text-black rounded-xl flex flex-col shadow-md bg-white max-w-md">
      {steps === 1 && <StepOne setSteps={setSteps} />}
      {steps === 2 && <StepTwo setSteps={setSteps} />}
      {steps === 3 && <StepThree setSteps={setSteps} />}
    </div>
  ) : null;
};

export default Popup;
