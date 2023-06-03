import React from "react";
import { useState } from "react";
import '../style/LocationModal.css'

const LocationModal = (props) => {

    return( 
        <div className="locations-modal">
            <div className="locations">
            {props.locationList.map((city, index) => <p className="each-city" key={index}>{city}</p>)}
            </div>
            <button onClick={props.changeState} className="close-btn">Close</button>
        </div>
    );
}

export default LocationModal;