import { Map } from "./components/Map";

export default function Home() {
  return (
    <div className="min-h-screen flex-col flex justify-center items-center">
      <h1>Mapa de prueba</h1>
      <div className="mx-auto">
        <Map />
      </div>
    </div>
  );
}
