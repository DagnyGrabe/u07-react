

function DetailsList({ item, displayUnits, getWindDirection, feelsLike }) {

    const temp = !isNaN(feelsLike);

    const getTime = (time) => {
        let localTime = new Date(time * 1000).toLocaleTimeString(
            [], { hour: '2-digit', minute: '2-digit', hour12: false });
        return localTime;
    }

    return (
        <ul>
            <li className={`${temp ? "flex" : "hidden" } justify-between`}>
                <p>feels like:</p>
                <p>{Math.round(feelsLike)} {displayUnits[0]}</p>
            </li>
            <li className="flex justify-between">
                <p>sunrise:</p>
                <p>{getTime(item.sunrise)}</p>
            </li>
            <li className="flex justify-between">
                <p>sunset:</p>
                <p>{getTime(item.sunset)}</p>
            </li>
            <li className="flex justify-between">
                <p>wind:</p>
                <p>{getWindDirection(item.wind_deg)} {Math.round(item.wind_speed)}{displayUnits[1]}</p>
            </li>
            <li className="flex justify-between">
                <p>humidity:</p>
                <p>{item.humidity}%</p>
            </li>
            <li className="flex justify-between">
                <p>pressure:</p>
                <p>{item.pressure} hPa</p>
            </li>

        </ul>
    );
}

export default DetailsList;