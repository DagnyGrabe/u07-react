

const CurrentWeather = ({data}) => {
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
                <ul>
                    
                </ul>
            </div>
        </div>
    )
}

export default CurrentWeather;