import { HeaderInet } from "./HeaderInet";
import { FooterInet } from "./FooterInet";
import { useState } from "react";
import { Main } from "./Main";
import { Map } from "./Map";
import FilterSheet from "./FilterSheet";
import { FiltersProvider } from "@/context/FiltersProvider";
import { Switch } from "./ui";
import { ReactNode } from "react";
import { useFilters } from "@/hooks/useFilters";
import { Popup } from "@/components/Popup/Popup";
interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  const [showMap, setShowMap] = useState(false);

  const handleToggle = () => {
    setShowMap(!showMap);
  };

  const { filters } = useFilters();
  const { codigoPostal } = filters;

  return (
    <FiltersProvider>
      <div className="relative min-h-screen bg-[var(--color-white)]">
        {!codigoPostal && <Popup />}
        <HeaderInet />
        <Main className={showMap ? "" : "pt-10"}>
          <div className="absolute top-0 left-0 px-6 py-5 flex justify-between z-40 w-full">
            <Switch onClick={handleToggle} />
            <FilterSheet />
          </div>
          {!showMap && children}
        </Main>
        {showMap && <Map />}
        <FooterInet />
      </div>
    </FiltersProvider>
  );
}
