import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Map() {
  return (
    <div className="map">
      <MapContainer center={[51.505, -0.09]} zoom="5" scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]} />
      </MapContainer>
    </div>
  );
}

export default Map;
