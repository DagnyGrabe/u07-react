

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
        className="py-2 px-4 m-2 text-white text-lg text-shadow 
        rounded-3xl bg-white bg-opacity-40 hover:ring-2 ring-white 
        w-52 transition duration-500">
        Use my location
        </button>
    );
}

export default UserPositionButton;