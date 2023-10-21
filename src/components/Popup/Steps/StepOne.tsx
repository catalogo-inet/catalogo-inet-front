import { Label } from "@/components/ui";
import { CardEstablishment } from "../CardEstablishment";
import tecnicaSuperior from "../../../assets/images/Tecnicatura-superior.jpg";
import secundaria from "../../../assets/images/secundaria.jpeg";
import formacionProfesional from "../../../assets/images/formacion-profesional.jpeg";

export const StepOne = ({ setSteps }) => {
  return (
    <div className="flex flex-col gap-3 font-bold">
      <Label className="text-black font-bold text-2xl mb-5">
        ¿Qué tipo de establecimiento estás buscando?
      </Label>
      <div className="flex flex-col md:flex-row gap-3 space-y-6 md:space-y-0">
        <CardEstablishment
          title="Secundaria (Secundaria Técnica y Educación Profesional Secundaria)"
          image={secundaria}
          setSteps={setSteps}
        />
        <CardEstablishment
          title="Tecnicatura Superior"
          image={tecnicaSuperior}
          setSteps={setSteps}
        />
        <CardEstablishment
          title="Formación Profesional
"
          image={formacionProfesional}
          setSteps={setSteps}
        />
      </div>
    </div>
  );
};

export default StepOne;
