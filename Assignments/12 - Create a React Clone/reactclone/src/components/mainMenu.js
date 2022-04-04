import React from "react";
import IndList from "./IndList";

function main() {
    const selection = [
        'NEW CAMPAIGN',
        'TRAINING',
        'ARENA',
        'STATS',
        'GUIDE',
        'OPTIONS',
        'QUIT'
    ];
    
    return ( 
        <div className="list">
        <IndList listContent = {selection}></IndList>
        </div>
    );
}

export default main;