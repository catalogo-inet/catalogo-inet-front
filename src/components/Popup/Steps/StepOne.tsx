import { Label } from "@/components/ui";

export const StepOne = ({ setSteps }) => {
  return (
    <>
      <Label className="text-black text-sm">
        ¿Qué tipo de establecimiento estás buscando?
      </Label>
      <div>
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
    </>
  );
};

export default StepOne;
