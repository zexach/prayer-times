import React from "react";
import '../style/Prayer.css'

const Prayer = (props) => {

    return(
        <div className="prayer">
            <h2 className="prayer-name">{props.prayerName}</h2>
            <h1 className="prayer-time">{props.prayerTime}</h1>
        </div>
    );
}

export default Prayer;