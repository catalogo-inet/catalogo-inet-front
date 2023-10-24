import { HeaderInet } from "./HeaderInet";
import { FooterInet } from "./FooterInet";
import { useState } from "react";
import { SwitchMap } from "./SwitchMap";
import { Main } from "./Main";
import { Map } from "./Map";
import FilterSheet from "./FilterSheet";
import { FiltersProvider } from "@/context/FiltersProvider";

export function Layout({ children }) {
  const [showMap, setShowMap] = useState(false);

  return (
    <FiltersProvider>
      <div className="min-h-screen bg-[var(--color-white)]">
        <HeaderInet />
        <Main className={showMap ? "" : "pt-10"}>
          <div className="absolute top-0 left-0 px-6 py-5 flex justify-between z-50 w-full">
            <SwitchMap state={showMap} setState={setShowMap} />
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
