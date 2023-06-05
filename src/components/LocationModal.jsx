import React from "react";
import '../style/LocationModal.css'

const LocationModal = (props) => {

    const clickedLocation = (event) => {

        const clickedLocation = event.target.innerText;
        const locationIndex = props.locationList.indexOf(clickedLocation);

        props.getLocation(locationIndex);
        props.changeState();
    }

    return( 
        <div className="locations-modal">
            <div className="locations">
            {props.locationList.map((city, index) => <p onClick={clickedLocation} className="each-city" key={index}>{city}</p>)}
            </div>
            <button onClick={props.changeState} className="close-btn">Close</button>
        </div>
    );
}

export default LocationModal;