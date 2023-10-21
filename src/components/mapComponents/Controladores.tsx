import { AttributionControl, ZoomControl, ScaleControl } from "react-leaflet";


export function Controladores() {
    
return (
    <>
    {/* Controles UI */}
    <ScaleControl position="bottomleft" maxWidth={200}></ScaleControl>
    <ZoomControl
        position="bottomleft"
        zoomOutTitle={"Alejar"}
        zoomInTitle={"Acercar"}>
    </ZoomControl>
    
    {/* <AttributionControl className="" position="bottomleft" prefix={false} /> */}
    <AttributionControl position="bottomright" prefix={false} />
    </>
);
}