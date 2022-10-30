
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
        <form className="w-full xs:w-4/5 sm:w-3/5 md:w-1/2 lg:mr-2 pr-4 xs:pr-0">
            <input
                className="w-full rounded-3xl px-8 py-2 bg-white bg-opacity-25
                text-md sm:text-lg border-2 border-white placeholder:text-gray-800 
                placeholder:font-medium inner transition duration-250 focus:outline-none"
                type="search"
                placeholder="Search location..."
                onChange={(e) => setQuery(e.target.value)}
                name="search">
            </input>

            {/* renders a list of location options from the Geocode api when options is set */}
            <ul className={`${options? "" : "hidden" } w-10/12 mx-2 mt-2 flex flex-col 
                justify-start items-start rounded-2xl overflow-hidden bg-white 
                bg-opacity-25 border-white border-2`}>

                {options && options.map((city) => 
                <li key={city.id}
                    className="w-full">
                    <button
                    className="px-6 py-2 w-full text-start text-gray-800 cursor-pointer 
                    transition duration-250 inner rounded-xl"
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