import { Navbar } from "./components/navbar/Navbar";
import { MapControl } from "./components/maps/MapControl";
import { Loading } from "./components/loading/Loading";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <MapControl />
      {/* <Loading /> */}
    </>
  );
}

export default App;
