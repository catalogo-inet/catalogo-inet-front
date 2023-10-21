"use client";

import { useState } from "react";
import { Map } from "@/components/Map";
import { ListOfFormations } from "@/components/home/ListOfFormations";
import { FilterSheet } from "@/components/home/FilterSheet";
import { HeaderInnet } from "@/components/home/HeaderInnet";
import { Main } from "@/components/home/Main";
import { SwitchMap } from "@/components/home/SwitchMap";

const Home = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--color-white)]">
      <HeaderInnet />
      <Main>
        <div className="items-center w-full gap-2 flex justify-between py-3 z-50">
          <SwitchMap state={showMap} setState={setShowMap} />
          <FilterSheet />
        </div>
        {!showMap && <ListOfFormations />}
      </Main>
      {showMap && <Map />}
    </main>
  );
};

export default Home;
