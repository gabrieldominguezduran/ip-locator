import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function LocationMap(props) {
  let defaultPosition = [51.505, -0.09];
  let position =
    props.position && props.position[0] ? props.position : defaultPosition;
  return (
    <section className={props.className}>
      <MapContainer center={position} zoom={1} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.position && props.position[0] ? (
          <Marker position={props.position}>
            <Popup>{props.text}</Popup>
          </Marker>
        ) : null}
      </MapContainer>
    </section>
  );
}

export default LocationMap;
