

const CurrentWeather = ({data}) => {

    const getTime = (time) => {
        let localTime = new Date(time * 1000).toLocaleTimeString(
            [], {hour: '2-digit', minute:'2-digit', hour12: false});
        return localTime;
    }
    return (
        <div>
            <div>
                <p>{data.name}</p>
                <p>{data.weather[0].description}</p>
                <img 
                alt="weather-icon"
                src={require(`../icons/${data.weather[0].icon}.png`)} />
                <p>{Math.round(data.main.temp)}°C</p>
            </div>
            <div>
                <p>details</p>
                <p>sunrise: {getTime(data.sys.sunrise)}</p>
                <p>sunset: {getTime(data.sys.sunset)}</p>
                <ul>
                    
                </ul>
            </div>
        </div>
    )
}

export default CurrentWeather;