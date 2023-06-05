import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Title from './components/Title'
import Location from './components/Location'
import Prayer from './components/Prayer'
import Date from './components/Date'
import LocationModal from "./components/LocationModal";


function App() {
  
    const baseURL = 'https://api.vaktija.ba/vaktija/v1';
    const [locations, setLocations] = useState([]);
    const [location, setLocation] = useState({
        "id": 200,
        "lokacija": "Loading",
        "datum": [
        "Loading",
        "Loading"
        ],
        "vakat": [
        "",
        "",
        "",
        "",
        "",
        ""
        ]
    });
    const [isOpen, setIsOpen] = useState(false);

    const getLocations = async() => {
        try{
            const response = await axios.get(`${baseURL}/lokacije`);
            setLocations(response.data);
        }
        catch(e){
            console.log(e);
        }

    }

    const getPrayerTimesForLocation = async(id) => {
        try{
            const response = await axios.get(`${baseURL}/${id}`);
            console.log(response.data)
            setLocation(response.data);
        }
        catch(e){
            console.log(e);
        }
    } 

    useEffect(() =>  {
        getPrayerTimesForLocation(77);
        getLocations();
    }, []);

    const handleLocationClick = () => {
        setIsOpen(!isOpen);
    }


  return (
    <>
      <Title />
      <div onClick={handleLocationClick} >
        <Location city={location.lokacija} />
      </div>
      <Date localDate={location.datum[0]} arabicDate={location.datum[1]} />
      <div className="prayers">
        <Prayer prayerName="Zora" prayerTime={location.vakat[0]} />
        <Prayer prayerName="Izlazak sunca" prayerTime={location.vakat[1]} />
        <Prayer prayerName="Podne" prayerTime={location.vakat[2]} />
        <Prayer prayerName="Ikindija" prayerTime={location.vakat[3]} />
        <Prayer prayerName="Akšam" prayerTime={location.vakat[4]} />
        <Prayer prayerName="Jacija" prayerTime={location.vakat[5]} />
      </div>
      {isOpen ? <LocationModal locationList={locations} getData={getPrayerTimesForLocation} changeState={handleLocationClick} getLocation={getPrayerTimesForLocation} /> : ''}
    </>
  )
}

export default App
