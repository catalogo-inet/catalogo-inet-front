import { SvgPoint } from "@/assets/icons/SvgIcons";
import json from "../../mocks/intituciones.json";

interface FormationProps {
  city: string;
  name: string;
  location: string;
  province: string;
  phone: string;
  email: string;
}

export function CardFormation({
  city,
  name,
  location,
  province,
  phone,
  email,
}: FormationProps) {
  console.log(json);
  return (
    <div className="text-black rounded-xl overflow-hidden flex flex-col shadow-md bg-gray-200 ">
      <header className="bg-[var(--color-blue)] p-5">
        <h2 className="text-white text-xl">
          {city} - {name}
        </h2>
      </header>
      <section className="p-5 text-base font-semibold">
        <p>Localidad: {location}</p>
        <p>Provincia: {province}</p>
        <p>Telefono: {phone}</p>
        <p>Correo Electronico: {email}</p>
      </section>
      <footer className="p-5 flex justify-between items-center gap-4 w-full">
        <button className="bg-white text-[var(--color-blue)] rounded-full py-1 px-2">
          Secundario tecnico
        </button>
        <SvgPoint />
      </footer>
    </div>
  );
}
