import DetailsList from "./details-list";


const CurrentWeather = ({ data, item, displayUnits, getWindDirection }) => {

    const feelsLike = data.main.feels_like;


    return (
        <div className="flex flex-col sm:flex-row bg-white bg-opacity-30 rounded-xl 
        justify-between items-stretch py-8 sm:px-16 lg:px-20 my-6 w-11/12 sm:w-full md:w-11/12">
            <div className="flex flex-col items-center my-6 md:my-4">
                <h2 className="text-5xl lg:text-6xl uppercase font-bold">
                    {data.name}
                </h2>
                <img className="my-6 sm:my-8 w-24 md:w-28"
                    alt="weather-icon"
                    src={require(`../icons/${data.weather[0].icon}.png`)}
                />
                <p className="text-xl md:text-2xl">
                    {data.weather[0].description}
                </p>

            </div>

            <div className="flex flex-col justify-between items-center sm:items-end">
                <p className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8">
                    {Math.round(data.main.temp)}{displayUnits[0]}
                </p>
                <div className="text-md md:text-lg md:pl-4 w-1/2 sm:w-full">
                    <DetailsList item={item} feelsLike={feelsLike} displayUnits={displayUnits} getWindDirection={getWindDirection} />
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;