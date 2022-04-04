import React from "react";

function cap() {
    const caption = <p className="captionContent">Start a new campaign game.</p>
    
    return ( 
        <div className="cap">
        {caption}
        </div>
    );
}

export default cap;