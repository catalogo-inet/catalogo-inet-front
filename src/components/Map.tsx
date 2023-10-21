"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, useMapEvents, TileLayer, AttributionControl, ZoomControl, ScaleControl, useMap } from "react-leaflet";
import { Circle, CircleMarker, Marker, Popup, Tooltip } from "react-leaflet";
import L, { } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Capas } from "@/components/mapComponents/Capas";
import {Controladores} from "@/components/mapComponents/Controladores";



export function Map() {

  
  const extremo_noroeste = [-20, -80];
  const extremo_sureste = [-90, -20];
  const limites_externos = L.latLngBounds(extremo_noroeste, extremo_sureste);


  const [center, setCenter] = useState<LatLngExpression>([
    -37.32167, -59.13316,
  ]);

  const customIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149060.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });


  useEffect(() => {}, [center]);

  // useEffect(() => {
  //   map.on('zoom', onMove)
  //   return () => {
      
  //   }
  // }, [map, onMove])

  function Load (lat:number, lon:number) {

    return(
    <Circle
      center={L.latLng(lat, lon)}
      pathOptions={{ fillColor: 'yellow' }}
      radius={200000}
    />
    );
  }

  function Eventos() {
    const [position, setPosition] = useState(null)
    const mapEvts = useMapEvents({
      locationfound(e) {
        setPosition(e.latlng)
        mapEvts.flyTo(e.latlng, 8)
      },
    })
  }



function Localize(){
  const map = useMap();
  map.locate(); // Se usa para pedir la ubicacion y centrar el mapa ahi.

}


  return (
      <>
      {/* <button onClick={Lokeame()}>click</button> */}

      <MapContainer
        style={{ height: "90vh", width: "80vw" }}
        key={center.join(",")}
        center={center}
        maxBounds={limites_externos}
        minZoom={4}
        maxZoom={18}
        zoom={4}
        zoomControl={false}
        attributionControl={false}
        
      >

      <Localize />

        {/* Capa base OSM (Contiene las atribuciones)*/}
        <TileLayer
          attribution='<a target="_blank" href="https://leafletjs.com/">Leaflet</a> | &copy; IGN - <a target="_blank" href="https://mapa.ign.gob.ar/">Argenmap</a> | &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png" />

        {/* Controles UI */}
        <Controladores />


        {/* CAPAS y control de capas */}
        {/* <Capas /> */}
        <Capas />


        <Marker position={center} icon={customIcon}>
          <Popup>AQUÍ PUEDES COLOCAR TU CONTENIDO DE MARCADOR</Popup>
        </Marker>

        

        <Eventos />
      </MapContainer>
      </>

  );
}