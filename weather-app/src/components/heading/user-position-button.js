

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
        className="py-2 px-4 my-1 mr-1 lg:my-0 sm:mr-2 text-sm xs:text-md lg:text-lg rounded-full 
        max-w-52 text-white text-shadow bg-transparent border-4 border-white border-opacity-60
        transition duration-500 inner flex-shrink-0">
        Use my location
        </button>
    );
}

export default UserPositionButton;