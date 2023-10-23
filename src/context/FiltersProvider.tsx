import { useState } from "react";
import { FiltersContext } from "@/context/FiltersContext";

export const FiltersProvider = (props) => {
  const [first, setfirst] = useState(second);
  return <FiltersContext.Provider>{props.children}</FiltersContext.Provider>;
};
