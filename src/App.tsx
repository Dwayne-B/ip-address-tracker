// App.tsx
import{useEffect,useState} from 'react'
import './App.scss';
import Form from './components/Form/Form';
import DataContainer from './components/DataContainer/DataContainer';
import MyMap from './components/MyMap/MyMap';
import mobile from './assets/images/pattern-bg-mobile.png';
import desktop from './assets/images/pattern-bg-desktop.png';


function App() {
  const [ipAddress,setIpAddress] = useState('');
  const [data,setData] = useState({
    ip: '',
    isp: '',
    location: {
      city: '',
      region: '',
      timezone: '',
      lat: 0,
      lng: 0,
    },
  });

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${ import.meta.env.VITE_REACT_APP_API_KEY}&ipAddress=${ipAddress}`

  useEffect(() =>{
    console.log('getting data....', ipAddress);
   
     fetch(url).then(res=>res.json()).then(data=>{
    
      const results = {ip:data.ip,
        location:{region:data.location.region,city:data.location.city,timezone:data.location.timezone,lat:data.location.lat,lng:data.location.lng},isp:data.isp}
     
      
      setData(results);
    })
 
   
    },[ipAddress])
    






  return (
    <>
      <div className='header'>
        <picture>
          <source srcSet={desktop} media='(min-widht:42rem;)' />
          <img src={mobile} alt="blue background image with geometric lines" />
        </picture>
        <h1>IP Address Tracker</h1>
        <Form setIpAddress={setIpAddress}/>
      </div>
      <div className="map-container">
        <MyMap lat={data.location.lat} long={data.location.lng}/>
        <DataContainer data={data}/>
      </div>
    </>
  );
}

export default App;
