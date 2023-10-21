import { HeaderInnet } from "./HeaderInnet";
import { useState } from "react";
import { SwitchMap } from "./home/SwitchMap";
import FilterSheet from "./home/FilterSheet";
import { Main } from "./home/Main";
import { Map } from "./Map";

export function Layout({ children }) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div>
      <HeaderInnet />
      <Main>
        <div className="items-center bg-white w-full gap-2 flex justify-between py-3 z-50">
          <SwitchMap state={showMap} setState={setShowMap} />
          <FilterSheet />
        </div>
        {!showMap && children}
      </Main>
      {showMap && <Map />}
    </div>
  );
}
