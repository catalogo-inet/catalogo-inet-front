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
import { Label } from "@radix-ui/react-label";

interface MyPageProps {
  result: object[];
}

async function getLocation(
  ciudad: string,
  provincia: string,
  direccion: string,
  cPostal: string
) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/7`);
  // const response = await fetch(`https://nominatim.openstreetmap.org/search?q=AV. Del valle 560, Tandil, Buenos Aires, Argentina&format=json`)
  // const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${direccion}, ${ciudad}, ${cPostal}, ${provincia}, Argentina&format=json`)
  const locData = await response.json();

  return locData;
}

export const getServerSideProps: GetServerSideProps<MyPageProps> = async (
  context
) => {
  const [result, setResult] = useState([{}]);
  const addResultItem = (nextVal: object) => {
    const arrayCopy = [...result]; //create a copy of the array
    arrayCopy.push(nextVal);
    setResult(arrayCopy); // update the state using the copy
  };

  try {
    // Realiza la solicitud HTTP a una API

    const [location, setData] = useState(null);
    const { data, isLoading, hasError } = useFetch(
      "http://localhost:7000/api/direcciones"
    );

    if (hasError || data == null) console.log("ERROR");

    data.forEach((element) => {
      useEffect(() => {
        getLocation(
          element.localidad,
          element.provincia,
          element.direccion,
          element.cPostal
        )
          .then((response) => setData(response))
          .catch((error) => console.error("Error in useEffect:", error));
      });

      addResultItem({
        nombre: element.nombre,
        location: location,
      });

      // return (
      //     <Marker position={[-45, -30]}>
      //         <Popup>element.Nombre</Popup>
      //     </Marker>
      // );
    });

    return {
      props: {
        result,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      props: {
        result: "ALGO SALIO MAO",
      },
    };
  }
};

//Ciudades de la provincia de Bs As
const ciudades = [
  {
    "cPostal": "1832",
    "localidad": "Lomas de Zamora",
    "coords": [-34.75885420599079, -58.3955629032258]
  },
  {
    "cPostal": "1913",
    "localidad": "Magdalena",
    "coords": [-35.06848838888889, -57.52182674444444]
  },
  {
    "cPostal": "1623",
    "localidad": "Escobar",
    "coords": [-34.3886315725, -58.754944525]
  },
  {
    "cPostal": "6015",
    "localidad": "General Viamonte",
    "coords": [-35.00067043214286, -61.03839523928572]
  },
  {
    "cPostal": "7100",
    "localidad": "Dolores",
    "coords": [-36.320457036363635, -57.67683308181819]
  },
  {
    "cPostal": "6030",
    "localidad": "Leandro N. Alem",
    "coords": [-34.50579705416667, -61.41073083333334]
  },
  {
    "cPostal": "1708",
    "localidad": "Morón",
    "coords": [-34.65990190803088, -58.61434355142857]
  },
  {
    "cPostal": "7163",
    "localidad": "General Juan Madariaga",
    "coords": [-36.95252588181818, -57.15576021818181]
  },
  {
    "cPostal": "2760",
    "localidad": "San Antonio de Areco",
    "coords": [-34.247278202564104, -59.47102903296703]
  },
  {
    "cPostal": "1742",
    "localidad": "Moreno",
    "coords": [-34.64194895, -58.7560420875]
  },
  {
    "cPostal": "7300",
    "localidad": "Azul",
    "coords": [-36.78410149832897, -59.858952134699216]
  },
  {
    "cPostal": "8000",
    "localidad": "Bahia Blanca",
    "coords": [-38.71849299014423, -62.26441257091346]
  },
  {
    "cPostal": "7620",
    "localidad": "Balcarce",
    "coords": [-37.84692076140351, -58.25953398421053]
  },
]

// wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

export const customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149060.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});


export function Capas() {


  const [filterProfesional, setFilterProf] = useState(true);
  const [filterSuperior, setFilterSup] = useState(true);
  const [filterTecnicos, setFilterTec] = useState(true);
  const [capaCiudades, setCapaCiudades] = useState();

      
      
      // <Marker position={[,]} icon={customIcon}></Marker>





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

      <LayerGroup checked={capaCiudades}>
        {ciudades.map((item) => (
          <Circle
            center={item.coords}
            pathOptions={{ fillColor: "blue" }}
            radius={20000}
          />
          ))}
      </LayerGroup>



      {/* Grupos para filtrado de marcadores */}
      <LayersControl.Overlay checked={filterTecnicos} name="Secundarios Técnicos">
        <LayerGroup>
          {/* <Load tipo={"sTec"} /> */}
        </LayerGroup>
      </LayersControl.Overlay>

      <LayersControl.Overlay checked={filterProfesional} name="Formación Profesional">
        <LayerGroup>
          {/* <Load tipo={"fProf"} /> */}
        </LayerGroup>
      </LayersControl.Overlay>

      <LayersControl.Overlay checked={filterSuperior} name="Educación Superior">
        <LayerGroup>
          {/* <Load tipo={"eSup"} /> */}
        </LayerGroup>
      </LayersControl.Overlay>

      

    </LayersControl>

    </>
  );
}
