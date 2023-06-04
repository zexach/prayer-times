import React from "react";

const Date = (props) => {
    return(
        <>
            <h2 style={{fontSize: '18px'}}>{props.localDate} / {props.arabicDate}</h2>
        </>
    );
}

export default Date;