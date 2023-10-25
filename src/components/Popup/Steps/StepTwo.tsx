import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

const orientaciones = [
"Técnico Mecánico",
"Panadero",
"Operador de Sistemas de Animación Computarizada",
"Técnico en Programación",
"Maestro Mayor de Obras",
"Técnico en Electrónica",
"Técnico Superior en Diseño Gráfico",
"Técnico Superior Ilustrador Profesional",
"Pastelero",
"Operador Básico de PC",
"Montador Electricista Domiciliario"
]

export const StepTwo = ({ setSteps }) => {
  return (
    <>
      <Label className="text-black font-bold text-2xl mb-5">
        ¿Qué orientacion queres estudiar?
      </Label>
      <div className="mt-5 flex flex-col space-y-4 max-w-xs">
        <Select>
          <SelectTrigger className=" rounded-[5px]">
            <SelectValue placeholder="Orientacion" />
          </SelectTrigger>
          <SelectContent className="bg-white overflow-y-auto max-h-[15rem]">
            <SelectGroup>
              <SelectLabel>Selecciona una orientación</SelectLabel>
              {
                orientaciones.map((item, i: number) => {
                  return (
                    <SelectItem key={i} value={item}>{item}</SelectItem>
                  );
                })
              }
            </SelectGroup>
          </SelectContent>
        </Select>
        <button
          onClick={() => {
            setSteps(3);
          }}
          type="submit"
          className="bg-[var(--color-blue)] text-white px-2 py-1 rounded-[5px]"
        >
          Continuar
        </button>
        <div>
          <span>Todavía no lo decidí.</span>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
