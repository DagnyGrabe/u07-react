import React from "react";

function UserPositionButton({setLat, setLon}) {

    const getUserCoords = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });

    }
     
    return (
        <button
        onClick={() => getUserCoords()}>
        Use my location
        </button>
    );
}

export default UserPositionButton;