import { LayerGroup, TileLayer, LayersControl, Circle, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

async function getRandomPhoto() {
    const photo = await fetch(
      `https://jsonplaceholder.typicode.com/photos/7`
    ).then((response) => response.json());
  
    console.log(photo);
    return photo;
}

export async function getStaticProps() {
    let photo;
    try {
      photo = await getRandomPhoto();
    } catch (e) {
      console.log("ERROR" + e)
      return {
        notfound: true,
      };
    }
  
    if (!photo) {
      return {
        notFound: true,
      };``
    }
  
    return {
      props: {
        photo,
      },
    };
  }

  export function Cargar() {
    const res = getStaticProps();
    const data = res.props;
    data.forEach(element => {

      return (
        <div>
            <h1>{element.title}</h1>
            <img src={element.url} />
        </div>
        );

    });
  }
    




export function Capas() {

return(
<div>
    <Cargar />
</div>

);
}


    /*const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch('http://localhost:7000/api/direcciones')
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) console.log("Loading...")
    if (!data) console.log("No data")

    return (
        fro
    )


    return fetch("http://localhost:7000/api/direcciones")
    .then((response) => response.json())
    .then((data) => {
        return data.forEach(element => {
            let direccion = getLocation(element.Direccion);
            return (
                <Marker position={direccion}>
                    <Popup>element.Nombre</Popup>
                </Marker>
            );
        });
    })
*/




function getLocation(ciudad, provincia, direccion, ){
    return fetch(
    "https://nominatim.openstreetmap.org/search",
    {
        method: "GET",
        body: {
        // country: "Argentina",
        // state: "Buenos Aires",
        // city: "Tandil",
        // postalcode: "7000",
        q: location,
        format: "json"
        },
        headers: { 
        "Content-Type": "application/json",
        },
    }
    )
    .then((response) => response.json())
    .then((data) => {
        let coords = [data[0].lat, data[0].lon];
        return coords;
    });
}

 



        // return(
        //     <>
        //     <LayersControl.Overlay name="Secundarios Técnicos">
        //     <LayerGroup>
        //         <Cargar type="sTecnicos" />
        //     </LayerGroup>
        //     </LayersControl.Overlay>

        //     <LayersControl.Overlay name="Tecnicatura Superior">
        //     <LayerGroup>
        //         <Cargar type="tSuperior" />
        //     </LayerGroup>
        //     </LayersControl.Overlay>

        //     <LayersControl.Overlay name="Formación Profesional">
        //     <LayerGroup>
        //         <Cargar type="fProfesional" />
        //     </LayerGroup>
        //     </LayersControl.Overlay>

        //     <LayersControl.Overlay name="Capa de ciudades">
        //         <Cargar type="ciudades" />
        //     <LayerGroup>


        //     </LayerGroup>
        //     </LayersControl.Overlay>
        //     </>
        // );

        // switch (type) {
        //     case "sTecnicos":
                
        //         break;

        //     case "fProfesional":
            
        //         break;

        //     case "tSuperior":
            
        //         break;

        //     case "ciudades":
                
        //         break;

            
        
        //     default:
        //         break;
        // }

// return(

//     <LayersControl position="topright">

//         {/* Capas de base */}
//         <LayersControl.BaseLayer checked name="Mapa original">
//         <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png" />
//         </LayersControl.BaseLayer>

//         <LayersControl.BaseLayer name="Modo oscuro">
//         <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/argenmap_oscuro@EPSG%3A3857@png/{z}/{x}/{-y}.png" />
//         </LayersControl.BaseLayer>

//         <LayersControl.BaseLayer name="Escala de grises">
//         <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG%3A3857@png/{z}/{x}/{-y}.png" />
//         </LayersControl.BaseLayer>

//         <LayersControl.BaseLayer name="Estilo topográfico">
//         <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_topo@EPSG%3A3857@png/{z}/{x}/{-y}.png" />
//         </LayersControl.BaseLayer>

//         <LayersControl.BaseLayer name="Estilo hibrido">
//         <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_hibrido@EPSG%3A3857@png/{z}/{x}/{-y}.png" />
//         </LayersControl.BaseLayer>  

//         <Cargar />

//     </LayersControl>
// );
// }
