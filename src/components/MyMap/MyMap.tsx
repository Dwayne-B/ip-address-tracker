import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./MyMap.scss";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from 'react';

interface MyMapProps {
  lat: number;
  long: number;
}

const MyMap: React.FC<MyMapProps> = ({ lat, long }) => {
  const [mapKey, setMapKey] = useState(0); // Key to force re-render
  useEffect(() => {
    // Check if lat and long are available before setting the key
    if (lat !== undefined && long !== undefined) {
      setMapKey((prevKey) => prevKey + 1);
    }
  }, [lat, long]);

  const position: [number, number] = [lat || 0, long || 0]; // Default to [0, 0] if coordinates are not available

  return (
    <MapContainer
      className='map'
      
      center={position}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
      key={mapKey} // Force re-render when the key changes
    >
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
