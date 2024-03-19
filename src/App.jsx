import React, { useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { BasicMap } from "./components/Examples/basicMap/BasicMap";
import { PolygonMap } from "./components/Examples/polygons/PolygonMap";
import { MapControl } from "@vis.gl/react-google-maps";
import { Footer } from "./components/footer/Footer";
import "./App.css";

function App() {
  const [mapSelected, setMapSelected] = useState(1);

  return (
    <>
      <div className="App">
        <Navbar mapSelected={mapSelected} setMapSelected={setMapSelected} />
        {mapSelected === 1 ? (
          <BasicMap />
        ) : mapSelected === 2 ? (
          <PolygonMap />
        ) : mapSelected === 3 ? (
          <MapControl />
        ) : null}
        <Footer />
      </div>
    </>
  );
}

export default App;
