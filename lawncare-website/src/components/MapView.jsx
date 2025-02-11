import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function MapView() {
    return (
        <MapContainer
            center={[53.5461, -113.4937]} // Edmonton coords
            zoom={13}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
}

export default MapView;
