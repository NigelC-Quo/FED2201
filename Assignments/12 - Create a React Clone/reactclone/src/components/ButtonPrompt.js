import React from "react";
import aButton from "../images/Xbox_button_A.png";

function buttonPrompt() {
    const button = <img className="btnPrompt" src={aButton} alt="button"/>
    
    return ( 
        <div className="cap">
        {button}
        <p className="select">SELECT</p>
        </div>
    );
}

export default buttonPrompt;