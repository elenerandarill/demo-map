import logo from './logo.svg';
import './App.css';
// import "react-leaflet";
import CustomMap from "./components/customMap";
import "leaflet/dist/leaflet.css";

function App() {

  return (
    <div className="App">
      <CustomMap />
    </div>
  );
}

export default App;
