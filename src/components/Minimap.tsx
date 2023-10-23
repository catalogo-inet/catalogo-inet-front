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
import { Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { customIcon } from "@/components/mapComponents/Capas";
import { Controladores } from "./mapComponents/Controladores";

export function Minimap() {

  const [center, setCenter] = useState<LatLngExpression>([
    -37.32167, -59.13316,
  ]);
  

  return (
      <MapContainer
        style={{ height: "100%", width: "100%", zIndex: 100 }}
        key={center.join(",")}
        center={center}
        minZoom={10}
        maxZoom={18}
        zoom={15}
        zoomControl={false}
        attributionControl={false}
        boxZoom={false}
        dragging={false}
        keyboard={false}
        scrollWheelZoom={false}
        touchZoom={center}
      >

      <TileLayer
        attribution='<a target="_blank" href="https://leafletjs.com/">Leaflet</a> | &copy; IGN - <a target="_blank" href="https://mapa.ign.gob.ar/">Argenmap</a> | &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Capa base Argenmap */}
      <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png" />

      <Controladores />

        
        

        <Marker position={center} icon={customIcon}>
          <Popup>AQUÍ PUEDES COLOCAR TU CONTENIDO DE MARCADOR</Popup>
        </Marker>

      </MapContainer>
  );
}
