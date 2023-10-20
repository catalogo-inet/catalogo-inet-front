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

export const StepTwo = ({ setSteps }) => {
  return (
    <>
      <Label className="text-black text-sm">
        ¿Qué orientación querés estudiar?
      </Label>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Selecciona una orientación</SelectLabel>
            <SelectItem value="apple">Programación</SelectItem>
            <SelectItem value="banana">Informática</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <button
        onClick={() => {
          setSteps(3);
        }}
        type="submit"
      >
        Submit
      </button>
      <div>
        <span>Todavía no lo decidí.</span>
      </div>
    </>
  );
};

export default StepTwo;
