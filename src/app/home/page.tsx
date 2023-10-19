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
    <div className="flex items-center space-x-2 ">
      <Switch id="activar-mapa" onClick={handleToggle} />
      <Label htmlFor="activar-mapa">Activar mapa</Label>
      {showMap && <Map />}
    </div>
  );
};

export default Home;
