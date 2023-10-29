"use client";
interface CordenateProvince {
  nombre: string;
  coords: L.LatLngTuple;
}

import React, { useState, useEffect } from "react";
import { MapContainer, useMapEvents, useMap } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Capas } from "@/components/mapComponents/Capas";
import { Controladores } from "@/components/mapComponents/Controladores";
import { useFilters } from "@/hooks/useFilters";
import mockJurisdicciones from "@/mocks/jurisdicciones.json";

  const [position, setPosition] = useState(null);
  
  function Eventos() {
  const map = useMap();
  const mapEvts = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(position, 8);
    },
  });
  return null;
}

export default function Map() {
  const extremo_noroeste: [number, number] = [-20, -80];
  const extremo_sureste: [number, number] = [-90, -20];
  const limites_externos = L.latLngBounds(extremo_noroeste, extremo_sureste);
  const [center, setCenter] = useState<L.LatLngTuple>([
    -37.32167, -59.13316,
  ]);
  
  const [provinciaActual, setProvincia] = useState<
    { nombre: string; coords: number[] }[]
  >([]);
  const { filters } = useFilters();
  let centerKey = `${center[0]},${center[1]}`;

  useEffect(() => {
    const coordenates = mockJurisdicciones.filter(
      (i: CordenateProvince) => i.nombre == filters.provincia
    );
    console.log(coordenates.coords);
    setProvincia(coordenates.coords)
  }, [filters]

  );

  function CenterProvince() {
    useEffect(() => {
      const map = useMap();
      map.flyTo(provinciaActual, 8);
    }, [provinciaActual]);
  }


  return (
    <div className="w-full h-[85vh]">
      <MapContainer
        style={{ height: "85vh", width: "100%", zIndex: 1 }}
        key={centerKey}
        center={center}
        maxBounds={limites_externos}
        minZoom={4}
        maxZoom={18}
        zoom={4}
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom={false}
        touchZoom={true}
      >
        <Controladores />
        <Capas />
        <Eventos />
        <CenterProvince />
      </MapContainer>
    </div>
  );
}
