

function DailyForecast({data}) {

    const getDay = (day) => {
        let weekDay = new Date(day * 1000).toLocaleDateString(
            'en', { weekday: 'long' });
        return weekDay;
    }

    return (
        <div>
            {data.map((item, idx) => (
                <div key={idx}>
                    <p>{getDay(item.dt)}</p>
                    <p>{item.weather[0].description}</p>
                    <img alt='weather icon'
                         src={require(`../icons/${item.weather[0].icon}.png`)} />
                    <p>High: {Math.round(item.temp.max)}°C</p>
                    <p>Low: {Math.round(item.temp.min)}°C</p>
                </div>
            ))}
        </div>

    );

}

export default DailyForecast;