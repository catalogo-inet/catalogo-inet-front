"use client";

import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export function Map() {
  const [center, setCenter] = useState<LatLngExpression>([-34.6118, -58.4173]);

  const customIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149060.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  useEffect(() => {}, [center]);

  return (
    <div className="w-full h-screen z-10">
      <MapContainer
        key={center.join(",")}
        center={center}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center} icon={customIcon}>
          <Popup>AQUÍ PUEDES COLOCAR TU CONTENIDO DE MARCADOR</Popup>
        </Marker>
        <ZoomControl position="bottomleft" />
      </MapContainer>
    </div>
  );
}
