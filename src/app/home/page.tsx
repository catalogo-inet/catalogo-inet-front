"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Home = () => {
  const [showMap, setShowMap] = useState(true);
  return (
    <div className="flex items-center space-x-2">
      <Switch id="activar-mapa" />
      <Label htmlFor="activar-mapa">Activar mapa</Label>
      {showMap && <p>Mapa activado</p>}
    </div>
  );
};

export default Home;
