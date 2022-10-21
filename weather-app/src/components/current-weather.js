

const CurrentWeather = ({data}) => {
    return (
        <div>
            <div>
                <p>{data.city}</p>
            </div>
        </div>
    )
}

export default CurrentWeather();