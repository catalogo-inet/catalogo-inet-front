import {
  LayerGroup,
  TileLayer,
  LayersControl,
  Circle,
  Marker,
  Popup,
} from "react-leaflet";
import { useState, useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import { GetServerSideProps } from "next";
import { useFilters } from "@/hooks/useFilters";
import { Link } from "lucide-react";
import L from "leaflet"
import { HandleError } from "@/components/HandleError";
import { HandleLoading } from "@/components/HandleLoading";
import { Institucion } from "@/types";

export const customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149060.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export function Capas() {
  const { instituciones, instError, instLoading } = useFilters();


  return (
    <>
      {/* Capa base OSM (Contiene las atribuciones)*/}
      <TileLayer
        attribution='<a target="_blank" href="https://leafletjs.com/">Leaflet</a> | &copy; IGN - <a target="_blank" href="https://mapa.ign.gob.ar/">Argenmap</a> | &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Capa base Argenmap */}
      <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png" />

      <LayersControl position="bottomright">
        {/* Mapas */}
        <LayersControl.BaseLayer checked name="Mapa original">
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

        <LayersControl.BaseLayer name="Mapa Etiquetado">
          <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_hibrido@EPSG%3A3857@png/{z}/{x}/{-y}.png" />
        </LayersControl.BaseLayer>

        <LayerGroup>
          <HandleError hasError={instError}>
            <HandleLoading isLoading={instLoading}>

            {instituciones &&
              instituciones.map((institucion: Institucion, i: number) => {
                return (
                  <Marker key={i} position={L.latLng(institucion.lat, institucion.lon)} icon={customIcon}>
                    <Popup>
                      {institucion.nombre + " - "}
                      <a href={`/institucion/${institucion.id}`} className="cursor-pointer">
                        Ver más
                      </a>
                    </Popup>
                  </Marker>
                );
              })
            }
            </HandleLoading>
          </HandleError>
        </LayerGroup>
      </LayersControl>
    </>
  );
}
