import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import HomeIcon from "../images/icons/map-places-lived.png";
import VisitedIcon from "../images/icons/map-places-visited.png";
import Home from "../images/icons/home.png";
import Plane from "../images/icons/plane.png";
import "./Demo.css";

const markers = [
  {
    description: [
      "Where Betty spent her childhood and teenage years",
      "Sarah Lawrence College - the college Betty attended",
      "Betty and her husband Harold lived here together for 60 years",
    ],
    coordinates: [40.9312, -73.8985],
    names: ["Yonkers, New York", "Bronxville, New York", "Manhattan, New York"],
    customPopup: true,
    iconUrl: HomeIcon,
  },
  {
    names: ["Basel, Switzerland"],
    description: ["Betty died here following her husband's death"],
    coordinates: [47.5596, 7.5886],
    iconUrl: HomeIcon,
  },
  {
    names: ["Tokyo, Japan"],
    description: ["Betty visited Tokyo during her travels"],
    coordinates: [35.682839, 139.759455],
    iconUrl: VisitedIcon,
  }, // Updated coordinates
];

const Places = () => {
  return (
    <div
      style={{
        height: "70vh",
        width: "90%",
        margin: "50px auto",
        overflowY: "hidden",
      }}
    >
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "60vh", width: "100%" }}
        scrollWheelZoom={false} // Disable scroll wheel zoom
        minZoom={2}
        maxZoom={10}
        zoomControl={false} // Disable default zoom control
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ZoomControl position="topright" />
        {markers.map((marker, idx) => {
          // Create a custom icon for each marker
          const icon = new L.Icon({
            iconUrl: marker.iconUrl,
            iconSize: [80, 80], // Adjust the size as needed
            iconAnchor: [40, 40], // Adjust the anchor point
            popupAnchor: [0, -25], // Adjust the popup anchor point
          });

          return (
            <Marker key={idx} position={marker.coordinates} icon={icon}>
              <Popup className="map-popup">
                {marker.names.map((name, idx) => (
                  <React.Fragment key={idx}>
                    <strong className="popup-title">{name}</strong>
                    <br />
                    <p className="popup-description">
                      {marker.description[idx]}
                    </p>
                    <br />
                    {idx < marker.names.length - 1 && (
                      <hr className="separator" />
                    )}{" "}
                    {/* Conditional separator */}
                  </React.Fragment>
                ))}
              </Popup>
            </Marker>
          );
        })}
        <div className="legend">
          <div className="legend-item" style={{ border: "2px solid #FFDE62" }}>
            <img src={Home} alt="Places Lived" className="legend-icon" />
            <span>Places Lived</span>
          </div>
          <div className="legend-item" style={{ border: "2px solid #FC8703" }}>
            <img src={Plane} alt="Places Visited" className="legend-icon" />
            <span>Places Visited</span>
          </div>
        </div>
      </MapContainer>
    </div>
  );
};

export default Places;
