import React from "react";
import logo1 from "../images/AztezLogo1.png";

function logo() {
    const aztez = <img className="logo1" src={logo1} alt="aztezLogo"/>
    
    return ( 
        <div className="logo">
        {aztez}
        </div>
    );
}

export default logo;