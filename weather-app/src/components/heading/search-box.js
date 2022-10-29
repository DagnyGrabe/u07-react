
import { GEO_API_URL, geoApiOptions } from '../../api';
import axios from 'axios';
import { useState, useEffect } from 'react';


function SearchBox({ setLat, setLon }) {

    const [query, setQuery] = useState("");
    const [options, setOptions] = useState(null);
    
    const geoUrl = `${GEO_API_URL}&namePrefix=${query}`

    useEffect(() => {
        const loadOptions = setTimeout(async () => {
            if (query.length > 1) {
                try {
                    const geoResponse = await axios.get(geoUrl, geoApiOptions);
                    console.log(geoResponse);
                    setOptions(geoResponse.data.data);
                    console.log(options);

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
        <form className="mx-12 w-1/2">
            <input
                className="w-full rounded-3xl px-8 py-2 bg-white bg-opacity-30 text-shadow
                text-white text-lg border-2 border-white placeholder:text-gray-900 
                placeholder:font-medium inner transition duration-250 focus:outline-none"
                type="search"
                placeholder="Search location..."
                onChange={(e) => setQuery(e.target.value)}
                name="search">
            </input>
            <ul className={`${options? "border-2" : "" } w-10/12 mx-2 mt-2 flex flex-col 
                justify-start items-start rounded-2xl overflow-hidden bg-white 
                bg-opacity-30 border-white`}>
                {options && options.map((city) => 
                <li key={city.id}
                    className="w-full">
                    <button
                    className="px-6 py-2 w-full text-start text-gray-900 cursor-pointer 
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