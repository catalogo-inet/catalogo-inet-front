"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, ScaleControl, AttributionControl, LayerGroup, LayersControl, Circle, useMapEvents, useMap, useMapEvent } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

  // import "../components/ApiFetch"

export function Map() {
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

  function Load (lat, lon) {
    return `<Circle
      center={[${lat}, ${lon}]}
      pathOptions={{ fillColor: 'blue' }}
      radius={200000}
    />`;
  }

  function Eventos() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        //map.flyTo(e.latlng, 13)
      },
    })
  }

  return (
    <>
      <MapContainer
        style={{ height: "90vh", width: "80vw" }}
        key={center.join(",")}
        center={center}
        // maxBounds={limites}
        minZoom={4}
        maxZoom={18}
        zoom={4}
        zoomControl={false}
        attributionControl={false}
      >

        {/* Capa base OSM (Contiene las atribuciones)*/}
        <TileLayer
          attribution='<a target="_blank" href="https://leafletjs.com/">Leaflet</a> | &copy; IGN - <a target="_blank" href="https://mapa.ign.gob.ar/">Argenmap</a> | &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png" />

        {/* Controles UI */}
        <ZoomControl position="topleft" zoomOutTitle={"Alejar"} zoomInTitle={"Acercar"}></ZoomControl>
        {/* <AttributionControl className="" position="bottomleft" prefix={false} /> */}
        <AttributionControl position="bottomright" prefix={false} />
        <ScaleControl position="bottomleft" maxWidth={200}></ScaleControl>


        {/* CAPAS y control de capas */}
        <LayersControl position="topright">

          {/* Capas de base */}
          <LayersControl.BaseLayer name="Mapa original">
            <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png" />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Modo oscuro">
            <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/argenmap_oscuro@EPSG%3A3857@png/{z}/{x}/{-y}.png" />
          </LayersControl.BaseLayer>
          
          <LayersControl.BaseLayer name="Escala de grises">
            <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG%3A3857@png/{z}/{x}/{-y}.png" />
          </LayersControl.BaseLayer>
          
          <LayersControl.BaseLayer name="Estilo topográfico">
            <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_topo@EPSG%3A3857@png/{z}/{x}/{-y}.png" />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Estilo hibrido">
            <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_hibrido@EPSG%3A3857@png/{z}/{x}/{-y}.png" />
          </LayersControl.BaseLayer>  

          <LayersControl.Overlay checked name="Secundarios Técnicos">
            <LayerGroup>
              <Circle
                center={[-34, -35]}
                pathOptions={{ fillColor: 'blue' }}
                radius={200000}
              />
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Tecnicatura Superior">
            <LayerGroup>
              <Circle
                center={[-34, -35]}
                pathOptions={{ fillColor: 'blue' }}
                radius={200000}
              />
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Formación Profesional">
            <LayerGroup>
              <Circle
                center={[-34, -35]}
                pathOptions={{ fillColor: 'green' }}
                radius={200000}
              />
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Capa de ciudades">
            <LayerGroup>

              <Load lat={-30} lon={-45} />

            </LayerGroup>
          </LayersControl.Overlay>

        </LayersControl>

        <Marker position={center} icon={customIcon}>
          <Popup>AQUÍ PUEDES COLOCAR TU CONTENIDO DE MARCADOR</Popup>
        </Marker>

        <Eventos />
      </MapContainer>
    </>
  );
}
