

function HourlyForecast({ data, displayUnits }) {

    const getHour = (time) => {
        let hour = new Date(time * 1000).toLocaleTimeString(
            [], {hour: '2-digit', hour12: false});
        return hour;
    }

    const next24 = data.slice(0, 24);

    return (
        <div>
            {next24.map((item, idx) => (
                <div key={idx}>
                    <p>{getHour(item.dt)}</p>
                    <p>{item.weather[0].description}</p>
                    <img alt='weather icon'
                         src={require(`../icons/${item.weather[0].icon}.png`)} />
                    <p>{Math.round(item.temp)}{displayUnits[0]}</p>
                </div>
            ))}
        </div>

    );

}

export default HourlyForecast;