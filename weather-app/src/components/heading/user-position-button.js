

function UserPositionButton({ setLat, setLon }) {

    const getUserCoords = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });

    }
       
    return (
        <button
        onClick={() => getUserCoords()}
        className="py-2 px-4 my-2 sm:mr-2 text-md sm:text-lg rounded-3xl 
        bg-white bg-opacity-25 border-2 border-white max-w-52 
        transition duration-500 hover:ring-2 ring-white flex-shrink-0">
        Use my location
        </button>
    );
}

export default UserPositionButton;