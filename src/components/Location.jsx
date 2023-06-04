import React from "react";
import '../style/Location.css'

const Location = (props) => {

    return(
        <div className="date-location">
            <div className="location-section">
                <h1 className='city'>{props.city}</h1>
                <svg className="location" width="49" height="49" fill="#213547" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1.5c-4.14 0-7.5 3.024-7.5 6.75 0 6 7.5 14.25 7.5 14.25s7.5-8.25 7.5-14.25c0-3.726-3.36-6.75-7.5-6.75ZM12 12a3 3 0 1 1 0-5.999A3 3 0 0 1 12 12Z"></path>
                </svg>
            </div>
        </div>
    );
}

export default Location;