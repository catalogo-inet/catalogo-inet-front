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

export function Map() {
  const extremo_noroeste: L.LatLngTuple = [-20, -80];
  const extremo_sureste: L.LatLngTuple = [-90, -20];
  const limites_externos = L.latLngBounds(extremo_noroeste, extremo_sureste);
  const [center, setCenter] = useState<L.LatLngExpression | L.Zoom>([
    -37.32167, -59.13316,
  ]);
  const [provinciaActual, setProvincia] = useState<CordenateProvince[]>([]);
  const { filters } = useFilters();

  useEffect(() => {
    const filterProvincia = mockJurisdicciones.filter(
      (i: CordenateProvince) => i.nombre == filters.provincia
    );
    setProvincia(filterProvincia);
  }, [filters]);

  function Eventos() {
    const [position, setPosition] = useState(null);
    const mapEvts = useMapEvents({
      locationfound(e) {
        setPosition(e.latlng);
        mapEvts.flyTo(position, 8);
      },
    });
  }

  const map = useMap();

  useEffect(() => {
    if (!provinciaActual) return;
    let coords: LatLngExpression = provinciaActual[0].coords;
    map.flyTo(coords, 7);
  }, [provinciaActual, map]);

  function Localize() {
    map.locate(); // Se usa para pedir la ubicacion y centrar el mapa ahi.
  }

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
        touchZoom={center}
      >
        <Controladores />
        <Capas />
      </MapContainer>
    </div>
  );
}
