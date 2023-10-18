import './App.scss'
import Form from './components/Form/Form'
import DataContainer from './components/DataContainer/DataContainer'
import MyMap from './components/MyMap/MyMap';
import mobile from "./assets/images/pattern-bg-mobile.png"
import desktop from "./assets/images/pattern-bg-desktop.png"
function App() {

  return (
    <>
     
  <div className='header'>
    <picture>
      <source srcSet={desktop} media='(min-widht:42rem;)'
    
      />
      <img src={mobile} alt="blue background image with geometric lines" />
    </picture>
  <h1>IP Address Tracker</h1>
    <Form/>
  </div>
    <div className="map-container">
    <MyMap />
    <DataContainer/>
    </div>
    </>
  )
}

export default App
