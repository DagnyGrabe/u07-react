import react from "react";



function UserPositionButton({ setLat, setLon}) {

    const getUserCoords = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });

    }
    
     
    return (
        <button
        onClick={() => getUserCoords()}
        className="p-2 m-2 text-blue-600 border-2">
        Use my location
        </button>
    );
}

export default UserPositionButton;