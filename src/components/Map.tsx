import React, { useState, useEffect } from "react";
import { MapContainer, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Capas } from "@/components/mapComponents/Capas";
import { Controladores } from "@/components/mapComponents/Controladores";
import { useFilters } from "@/hooks/useFilters";
import mockJurisdicciones from "@/mocks/jurisdicciones.json";

function Eventos() {
  const [position, setPosition] = useState(null);
  const map = useMap();
  const mapEvts = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(position, 8);
    },
  });
  return null;
}

export function Map() {
  const extremo_noroeste = [-20, -80];
  const extremo_sureste = [-90, -20];
  const limites_externos = L.latLngBounds(extremo_noroeste, extremo_sureste);
  const [center, setCenter] = useState([-37.32167, -59.13316]);
  const [provinciaActual, setProvincia] = useState<
    { nombre: string; coords: number[] }[]
  >([]);
  const { filters } = useFilters();

  useEffect(() => {
    const filterProvincia = mockJurisdicciones.filter(
      (i) => i.nombre == filters.provincia
    );
    setProvincia(filterProvincia);
  }, [filters]);

  return (
    <div className="w-full h-[85vh]">
      <MapContainer
        style={{ height: "85vh", width: "100%", zIndex: 1 }}
        key={center.join(",")}
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
        {/* Controles UI */}
        <Controladores />

        {/* CAPAS y control de capas */}
        <Capas />

        {/* Eventos */}
        <Eventos />
      </MapContainer>
    </div>
  );
}
