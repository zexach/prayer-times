import React from "react";
import '../style/Title.css'
import moon from '../assets/moon.svg'

const Title = () => {

    return(
        <div className="title-section">
            <img src={moon} width="120" alt="Moon" />
            <div className="title">
                <h1>Prayer times</h1>
                <h2 className="country">Bosnia and Herzegovina</h2>
            </div>
        </div>
    );

}

export default Title;