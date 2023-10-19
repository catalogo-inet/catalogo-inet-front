"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Map } from "@/components/Map";
import { ListOfFormations } from "@/components/ListOfFormations";
import { FilterSheet } from "@/components/FilterSheet";

const Home = () => {
  const [showMap, setShowMap] = useState(false);

  const handleToggle = () => {
    setShowMap(!showMap);
  };

  return (
    <main className="min-h-screen bg-[var(--color-white)]">
      <header className="h-24 bg-gray-300"></header>
      <section className="relative">
        <div className="items-center w-full gap-2 flex justify-between p-3 z-50 sm:justify-end">
          <div className="bg-white rounded-full py-1 px-2 flex items-center gap-2">
            <div
              className={`${
                showMap ? "bg-blue-400" : "bg-gray-300"
              } rounded-full flex items-center shadow-md`}
            >
              <Switch id="activar-mapa" onClick={handleToggle} />
            </div>
            <Label htmlFor="activar-mapa" className="text-black text-sm">
              Mapa
            </Label>
          </div>
          <FilterSheet />
        </div>
      </section>

      <div className="z-10">{showMap ? <Map /> : <ListOfFormations />}</div>
    </main>
  );
};

export default Home;
