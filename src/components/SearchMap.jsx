import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function SearchMap(props) {
  let position = [51.505, -0.09];

  console.log(position);
  return (
    <section className={props.className}>
      <MapContainer
        id="map"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default SearchMap;