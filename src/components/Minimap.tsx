"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { customIcon } from "@/components/mapComponents/Capas";
import { Controladores } from "./mapComponents/Controladores";
import L from "leaflet";

export function Minimap({ lat, lon }: { lat: number; lon: number }) {
  const center = L.latLng(lat, lon);

  function FlyToCenter() {
    const map = useMap();
    map.flyTo(center, 17);
  }

  return (
    <MapContainer
      style={{ height: "100%", width: "100%", zIndex: 0 }}
      center={center}
      minZoom={5}
      maxZoom={18}
      zoom={1}
      zoomControl={false}
      attributionControl={false}
      boxZoom={false}
      dragging={false}
      keyboard={false}
      scrollWheelZoom={false}
      touchZoom={true}
    >
      <TileLayer
        attribution='<a target="_blank" href="https://leafletjs.com/">Leaflet</a> | &copy; IGN - <a target="_blank" href="https://mapa.ign.gob.ar/">Argenmap</a> | &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Capa base Argenmap */}
      <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png" />

      <Controladores />

      <Marker position={center} icon={customIcon}></Marker>
    </MapContainer>
  );
}
