"use client";

import React, { useState, useEffect } from "react";
import {
  MapContainer,
  useMapEvents,
  TileLayer,
  AttributionControl,
  ZoomControl,
  ScaleControl,
  useMap,
} from "react-leaflet";
import { Circle, CircleMarker, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Capas, customIcon } from "@/components/mapComponents/Capas";
import { Controladores } from "@/components/mapComponents/Controladores";

export function Map() {
  const extremo_noroeste = [-20, -80];
  const extremo_sureste = [-90, -20];
  const limites_externos = L.latLngBounds(extremo_noroeste, extremo_sureste);
  const [center, setCenter] = useState<LatLngExpression>([
    -37.32167, -59.13316,
  ]);

  useEffect(() => {}, [center]);

  // useEffect(() => {
  //   map.on('zoom', onMove)
  //   return () => {

  //   }
  // }, [map, onMove])

  function Eventos() {
    const [position, setPosition] = useState(null);
    const mapEvts = useMapEvents({
      locationfound(e) {
        setPosition(e.latlng);
        mapEvts.flyTo(e.latlng, 8);
      },
    });
  }

  function Localize() {
    const map = useMap();
    map.locate(); // Se usa para pedir la ubicacion y centrar el mapa ahi.
  }

  return (
    <div className="w-full h-screen">
      <MapContainer
        style={{ height: "100%", width: "100%", zIndex: 1 }}
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
        <Localize />

        
        {/* Controles UI */}
        <Controladores />

        {/* CAPAS y control de capas */}
        <Capas />

        <Marker position={center} icon={customIcon}>
          <Popup>AQUÍ PUEDES COLOCAR TU CONTENIDO DE MARCADOR</Popup>
        </Marker>

        <Eventos />
      </MapContainer>
    </div>
  );
}
