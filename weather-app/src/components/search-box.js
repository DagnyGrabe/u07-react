
import { GEO_API_URL, geoApiOptions } from '../api';
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
        }, 1000)
        return () => clearTimeout(loadOptions);
    }, [query]);

    const selectOption = (target) => {
        
        const coords = target.value.split(' ');
        setLat(coords[0]);
        setLon(coords[1]);
        setOptions(null);    
    }

    return (
        <form onSubmit={(e) => {e.preventDefault(); e.target.reset()}}>
            <input
                className="relative"
                type="search"
                placeholder="search location"
                onChange={(e) => setQuery(e.target.value)}
                name="search">
            </input>
            <ul>
                {options && options.map((city) => 
                <li key={city.id}>
                    <button
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