
import { GEO_API_URL, geoApiOptions } from '../../api';
import axios from 'axios';
import { useState, useEffect } from 'react';


function SearchBox({ setLat, setLon }) {

    const [query, setQuery] = useState("");
    const [options, setOptions] = useState(null);
    
    const geoUrl = `${GEO_API_URL}&namePrefix=${query}`

    useEffect(() => {
        /* loads a list of locations matching user input in searchbox */
        const loadOptions = setTimeout(async () => {
            if (query.length > 1) {
                try {
                    const geoResponse = await axios.get(geoUrl, geoApiOptions);
                    setOptions(geoResponse.data.data);

                } catch (err) {
                    console.error(err);
                }
            }
        }, 1000);
        return () => clearTimeout(loadOptions);
    }, [query]);

    const selectOption = (target) => {
        
        const coords = target.value.split(' ');
        setLat(coords[0]);
        setLon(coords[1]);
        setOptions(null);    
    }

    return (
        <form className="w-full sm:w-3/4 md:w-1/2">
            <input
                className="w-full rounded-full px-6 py-2 bg-transparent
                text-sm xs:text-md lg:text-lg placeholder:text-gray-800 
                placeholder:font-medium inner transition duration-500 focus:outline-none
                text-white text-shadow text-center xs:text-start border-4 border-white border-opacity-60"
                type="search"
                placeholder="Search location..."
                onChange={(e) => setQuery(e.target.value)}
                name="search">
            </input>

            {/* renders a list of location options from the Geocode api when options is set */}
            <ul className={`${options? "" : "hidden" } w-10/12 mx-2 mt-2 flex flex-col 
                justify-start items-start rounded-xl overflow-hidden  bg-white bg-opacity-25
                border-4 border-white border-opacity-60`}>

                {options && options.map((city) => 
                <li key={city.id}
                    className="w-full">
                    <button
                    className="px-6 py-2 w-full text-start text-gray-800 cursor-pointer 
                    transition duration-300 inner text-sm xs:text-md md:text-lg"
                    type="submit"
                    onClick={(e) => selectOption(e.target)}
                    value={`${city.latitude} ${city.longitude}`}
                    name={`${city.name} ${city.countryCode}`}>
                        {city.name}, {city.countryCode}
                    </button>
                </li>
                )}
            </ul>
        </form>

    );

}

export default SearchBox;