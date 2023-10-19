"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Map } from "@/components/Map";

const Home = () => {
  const [showMap, setShowMap] = useState(false);

  const handleToggle = () => {
    setShowMap(!showMap);
  };

  return (
    <main className="min-h-screen bg-[var(--color-white)]">
      <div className="items-center w-full gap-2 flex justify-end p-3 z-50 absolute  ">
        <div className="bg-white rounded-full p-1 flex gap-3">
          <div className="bg-blue-400 rounded-full flex items-center shadow-md">
            <Switch id="activar-mapa" onClick={handleToggle} />
          </div>
          <Label htmlFor="activar-mapa" className="text-black text-base">
            Activar mapa
          </Label>
        </div>
      </div>

      <div className="flex items-center space-x-2 z-30">
        {showMap && <Map />}
      </div>
    </main>
  );
};

export default Home;
