import React, {useState} from "react";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import AllMarkers from "./myMarkers";
import markers from "./markersList";
import basicMarkIcon from "../utils/basicMarkIcon";


const CustomMap = () => {
    const [lat, setLat] = useState(52.2381701679877);
    const [lng, setLng] = useState(21.021557191093766);
    const [zoom, setZoom] = useState(13);
    // const [markers, setMarkers] = useState([]);

    const marker1 = [52.24520451421007, 21.054133239408895];
    const center = [lat, lng];

    return(
        <MapContainer id="mapid" center={center} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AllMarkers markers = { markers }/>
        </MapContainer>
    )
};

export default CustomMap;
