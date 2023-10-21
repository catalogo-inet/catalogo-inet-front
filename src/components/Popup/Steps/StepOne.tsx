import { Label } from "@/components/ui";

export const StepOne = ({ setSteps }) => {
  return (
    <div className="flex flex-col gap-3 font-bold">
      <Label className="text-black text-sm">
        ¿Qué tipo de establecimiento estás buscando?
      </Label>
      <div className="flex gap-3">
        <button
          onClick={() => {
            setSteps(2);
          }}
        >
          Secundaria (Secundaria Técnica y Educación Profesional Secundaria)
        </button>
        <button
          onClick={() => {
            setSteps(2);
          }}
        >
          Tecnicatura Superior
        </button>
        <button
          onClick={() => {
            setSteps(2);
          }}
        >
          Formación Profesional
        </button>
      </div>
    </div>
  );
};

export default StepOne;
