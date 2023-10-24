import { SvgPoint } from "@/assets/icons/SvgIcons";
import json from "../../mocks/intituciones.json";
import Link from "next/link";
interface FormationProps {
  id: number;
  city: string;
  name: string;
  direction: string;
  location: string;
  province: string;
  phone: string;
  email: string;
}

export function CardFormation({
  id,
  city,
  name,
  province,
  phone,
  email,
  direction,
}: FormationProps) {
  return (
    <Link
      href={`/institucion/${id}`}
      className="text-black rounded-xl overflow-hidden flex flex-col shadow-md bg-gray-200 hover:scale-105 cursor-pointer"
    >
      <header className="bg-[var(--color-blue)] p-5">
        <h2 className="text-white text-xl">
          {city} - {name}
        </h2>
      </header>
      <section className="p-5 text-base font-semibold">
        <p>Dirección: {direction}</p>
        <p>Localidad: {city}</p>
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
    </Link>
  );
}
