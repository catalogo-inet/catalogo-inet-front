import { LayerGroup, TileLayer, LayersControl, Circle, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import { GetServerSideProps } from 'next';

interface MyPageProps {
    result: object[];
  }


async function getLocation(ciudad:string, provincia:string, direccion:string, cPostal:string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/7`)
    // const response = await fetch(`https://nominatim.openstreetmap.org/search?q=AV. Del valle 560, Tandil, Buenos Aires, Argentina&format=json`)
    // const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${direccion}, ${ciudad}, ${cPostal}, ${provincia}, Argentina&format=json`)
    const locData = await response.json();

    return locData;
}



export const getServerSideProps: GetServerSideProps<MyPageProps> = async (context) => {
    
    const [result, setResult] = useState([{}]);
    const addResultItem = (nextVal:object) => {
        const arrayCopy = [...result]; //create a copy of the array
        arrayCopy.push(nextVal);
        setResult(arrayCopy); // update the state using the copy
    };

try {
    // Realiza la solicitud HTTP a una API
    

    const [location, setData] = useState(null);
    const { data, isLoading, hasError } = useFetch("http://localhost:7000/api/direcciones")


        if (hasError || data == null) console.log("ERROR");


        data.forEach(element => {
            
            useEffect(() => {
                getLocation(element.localidad, element.provincia, element.direccion, element.cPostal)
                .then((response) => setData(response))
                .catch((error) => console.error('Error in useEffect:', error));
            });


            // const response = await fetch('https://jsonplaceholder.typicode.com/photos/7');
            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }
            // const data: string[] = await response.json();

            addResultItem({
                "nombre": element.nombre,
                "location": location
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
    console.error('Error in getServerSideProps:', error);
    return {
        props: {
            result: "ALGO SALIO MAO",
        },
    };
}

    
};




export function Capas({ result }: MyPageProps) {
console.log(result)
    
return(
  <LayersControl position="bottomright">

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

        <LayersControl.BaseLayer checked name="Mapa Etiquetado">
        <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_hibrido@EPSG%3A3857@png/{z}/{x}/{-y}.png" />
        </LayersControl.BaseLayer>  

        <>
            {result}
        </>

    </LayersControl>
);
}