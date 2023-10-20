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
  return (
    <div className="text-black rounded-xl overflow-hidden flex flex-col shadow-md bg-gray-200 max-w-md">
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
        <svg
          width="18"
          height="21"
          viewBox="0 0 18 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6421 8.75C14.6421 14 8.95107 19.25 8.95107 19.25C8.95107 19.25 3.26001 14 3.26001 8.75C3.26001 6.89349 3.8596 5.11301 4.92688 3.80025C5.99416 2.4875 7.4417 1.75 8.95107 1.75C10.4604 1.75 11.908 2.4875 12.9753 3.80025C14.0425 5.11301 14.6421 6.89349 14.6421 8.75Z"
            stroke="#0E68AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.95104 11.375C10.1297 11.375 11.0852 10.1997 11.0852 8.75C11.0852 7.30025 10.1297 6.125 8.95104 6.125C7.77238 6.125 6.81689 7.30025 6.81689 8.75C6.81689 10.1997 7.77238 11.375 8.95104 11.375Z"
            stroke="#0E68AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </footer>
    </div>
  );
}
