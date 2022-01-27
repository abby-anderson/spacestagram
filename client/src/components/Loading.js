import React from "react";
import logo from  '../images/loadingMoon.gif';


function Loading () {

    return (
        <div className="loading text-focus-in">
            <img src={logo} alt="loading..." />
            <p>Loading...</p>
        </div>
    )
}

export default Loading;