import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function UserLocationMap(props) {
  const { currentUser } = useContext(UserContext);

  return (
    <section className={props.className}>
      {Object.keys(currentUser).length !== 0 ? (
        <MapContainer
          id="map"
          center={[currentUser.latitude, currentUser.longitude]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[currentUser.latitude, currentUser.longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      ) : null}
    </section>
  );
}

export default UserLocationMap;
