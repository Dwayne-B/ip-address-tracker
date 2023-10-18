import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./MyMap.scss"
import"leaflet/dist/leaflet.css";
const MyMap = () => {
  const position: [number, number] = [51.505, -0.09]; // Initial position [latitude, longitude]

  return (
    <MapContainer className='map' center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A marker on the map.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
