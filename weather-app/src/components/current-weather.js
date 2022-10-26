

const CurrentWeather = ({ data, displayUnits }) => {

    const getTime = (time) => {
        let localTime = new Date(time * 1000).toLocaleTimeString(
            [], {hour: '2-digit', minute:'2-digit', hour12: false});
        return localTime;
    }
    return (
        <div className="flex flex-row bg-white bg-opacity-25 rounded-xl justify-between py-8 px-12 my-6 max-w-3/4">
            <div className="flex flex-col items-center mt-2 mr-20">
                <h2 className="text-5xl uppercase font-bold text-white text-shadow">
                    {data.name}
                </h2>
                <img className="my-4 w-28"
                alt="weather-icon"
                src={require(`../icons/${data.weather[0].icon}.png`)} 
                />
                <p className="text-white text-shadow text-xl font-bold">
                    {data.weather[0].description}
                </p>
                
            </div>
            
            <div className="flex flex-col justify-between">
                <p className="text-7xl font-bold text-white text-shadow">
                    {Math.round(data.main.temp)}{displayUnits[0]}
                </p>
                
                <ul className="text-white text-shadow text-md">
                    <li>
                    <p>sunrise: {getTime(data.sys.sunrise)}</p>
                    </li>
                    <li>
                    <p>sunset: {getTime(data.sys.sunset)}</p>
                    </li>
                    <li>
                    <p>windspeed: {Math.round(data.wind.speed)} {displayUnits[1]}</p>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default CurrentWeather;