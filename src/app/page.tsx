"use client";

import FilterSheet from "@/components/FilterSheet";
import { ListOfFormations } from "@/components/home/ListOfFormations";
import { Label, Switch } from "@/components/ui";
import { useState } from "react";
const Home = () => {
  const [showMap, setShowMap] = useState(second);

  const handleToggle = () => {
    setShowMap(!showMap);
  };

  return (
    <>
      <div className="absolute top-0 left-0 px-6 py-5 flex justify-between z-40 w-full">
        <div className="bg-white rounded-full py-1 px-2 flex items-center gap-2">
          <div
            className={`${
              showMap ? "bg-blue-400" : "bg-gray-300"
            } rounded-full flex items-center shadow-md`}
          >
            <Switch
              id="activar-mapa"
              onClick={handleToggle}
              checked={showMap}
            />
          </div>
          <Label htmlFor="activar-mapa" className="text-black text-sm">
            Mapa
          </Label>
        </div>
        <FilterSheet />
      </div>
      {!showMap && <ListOfFormations />}
    </>
  );
};

export default Home;
