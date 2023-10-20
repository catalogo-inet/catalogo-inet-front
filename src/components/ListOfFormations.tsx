"use client";

import { CardFormation } from "./CardFormation";

const list = [
  {
    city: "Buenos Aires",
    name: "Escuela Técnica Otto Krause",
    location: "Av. Independencia 3447",
    province: "Buenos Aires",
    phone: "+54 11 4932-1513",
    email: "info@eotokrause.com.ar",
  },
  {
    city: "Córdoba",
    name: "Instituto Técnico Salesiano",
    location: "Av. Colón 425",
    province: "Córdoba",
    phone: "+54 351 4280540",
    email: "info@itsc.edu.ar",
  },
  {
    city: "Mendoza",
    name: "Escuela Técnica General Las Heras",
    location: "Av. San Martín 275",
    province: "Mendoza",
    phone: "+54 261 4201456",
    email: "etghmendoza@gmail.com",
  },
  {
    city: "Rosario",
    name: "Escuela Técnica Superior Oro Verde",
    location: "Av. Aristóbulo del Valle 7515",
    province: "Santa Fe",
    phone: "+54 341 4641546",
    email: "info@etsov.edu.ar",
  },
];

export function ListOfFormations() {
  return (
    <>
      <h1 className="text-black text-2xl font-semibold pl-5 mt-10">
        Formacion profesional
      </h1>
      <div className="flex flex-col p-5 gap-7 sm:grid sm:grid-cols-2 mx-auto">
        {list.map((formation, i) => {
          const { city, name, location, province, email, phone } = formation;
          return (
            <CardFormation
              key={i}
              city={city}
              name={name}
              location={location}
              province={province}
              email={email}
              phone={phone}
            />
          );
        })}
      </div>
    </>
  );
}
