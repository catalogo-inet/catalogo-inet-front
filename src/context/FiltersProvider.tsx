import { useState } from "react";
import { FiltersContext } from "@/context/FiltersContext";

export const FiltersProvider = (props) => {
  const [profesional, setProfesional] = useState(false);

  return (
    <FiltersContext.Provider
      value={{
        profesionalTrue: () => setProfesional(true),
        profesional,
      }}
    >
      {props.children}
    </FiltersContext.Provider>
  );
};
