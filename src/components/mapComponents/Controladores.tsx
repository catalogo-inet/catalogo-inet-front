import { AttributionControl, ZoomControl, ScaleControl } from "react-leaflet";


export function Controladores() {
    
return (
    <>
    {/* Controles UI */}
    <ZoomControl
        position="topleft"
        zoomOutTitle={"Alejar"}
        zoomInTitle={"Acercar"}>
    </ZoomControl>
    
    {/* <AttributionControl className="" position="bottomleft" prefix={false} /> */}
    <AttributionControl position="bottomright" prefix={false} />
    <ScaleControl position="bottomleft" maxWidth={200}></ScaleControl>
    </>
);
}