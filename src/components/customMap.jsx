import React, {useState} from "react";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import basic_marker from "../icons/basic_marker.svg";
import basic_marker_shadow from "../icons/basic_marker_shadow.svg"
import L from "leaflet";


const CustomMap = () => {
    const [lat, setLat] = useState(52.231112007403496);
    const [lng, setLng] = useState(20.990548787390445);
    const [zoom, setZoom] = useState(10);
    const [markers, setMarkers] = useState([]);

    const marker1 = [52.24520451421007, 21.054133239408895];
    const center = [lat, lng];

    const basic_mark_icon = L.icon({
        iconUrl: basic_marker,
        shadowUrl: basic_marker_shadow,
        iconAnchor: [25, 50],
        iconSize: [50, 50],
        popupAnchor: [0, -46],
        shadowAnchor: [5, 40],
        shadowSize: [40, 40],
        shadowBlur: [100, 50],
    })

    return(
        <MapContainer id="mapid" center={center} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={marker1} icon={basic_mark_icon}>
                <Popup>
                    My popup.
                </Popup>
            </Marker>
        </MapContainer>
    )
};

export default CustomMap;
