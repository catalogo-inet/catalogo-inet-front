import { Label } from "@/components/ui";
import { CardEstablishment } from "../CardEstablishment";
import tecnicaSuperior from "../../../assets/images/Tecnicatura-superior.jpg";
import secundaria from "../../../assets/images/secundaria.jpeg";
import formacionProfesional from "../../../assets/images/formacion-profesional.jpeg";
import { useFilters } from "@/hooks/useFilters";

export const StepOne = ({ setSteps }) => {
  const { setFilterTipoInstitucion } = useFilters();
  const handleClick = (tipo: string) => {
    setFilterTipoInstitucion(tipo);
  };
  return (
    <div className="flex flex-col gap-3 font-bold">
      <Label className="text-black font-bold text-2xl mb-5">
        ¿Qué tipo de establecimiento estás buscando?
      </Label>
      <div className="flex flex-col md:flex-row gap-3 space-y-6 md:space-y-0">
        <div onClick={() => handleClick("Secundario Primer Ciclo")}>
          <CardEstablishment
            title="Secundario Primer Ciclo"
            image={secundaria}
            setSteps={setSteps}
          />
        </div>
        <div onClick={() => handleClick("Secundario Segundo Ciclo")}>
          <CardEstablishment
            title="Tecnicatura Superior"
            image={tecnicaSuperior}
            setSteps={setSteps}
          />
        </div>
        <div onClick={() => handleClick("Superior Tecnico")}>
          <CardEstablishment
            title="Formación Profesional"
            image={formacionProfesional}
            setSteps={setSteps}
          />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
