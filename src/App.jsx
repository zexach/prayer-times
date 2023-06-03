import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Title from './components/Title'
import Location from './components/Location'
import Prayer from './components/Prayer'

function App() {
  
    const [locations, setLocations] = useState([]);

    const getLocations = async() => {
        try{
            const response = await axios.get(`https://api.vaktija.ba/vaktija/v1/lokacije`);
            setLocations(response.data);
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(() =>  {
        getLocations();
    }, []);


  return (
    <>
      <Title />
      <Location city="Zavidovići" locations={locations} />
      <div className="prayers">
        <Prayer prayerName="Zora" />
        <Prayer prayerName="Izlazak sunca" />
        <Prayer prayerName="Podne" />
        <Prayer prayerName="Ikindija" />
        <Prayer prayerName="Akšam" />
        <Prayer prayerName="Jacija" />
      </div>
    </>
  )
}

export default App
