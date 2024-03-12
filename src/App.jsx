import { Navbar } from "./components/navbar/Navbar";
import { MapControl } from "./components/maps/MapControl";
import { PolygonMap } from "./components/maps/PolygonMap";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <PolygonMap />
      {/* <MapControl /> */}
    </>
  );
}

export default App;
