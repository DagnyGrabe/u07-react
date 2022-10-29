import DetailsList from "./details-list";


const CurrentWeather = ({ data, item, displayUnits, getWindDirection }) => {

    const feelsLike = data.main.feels_like;


    return (
        <>
            <h3 className="uppercase text-2xl font-bold mt-8 mb-2">Current</h3>
            <div className="flex flex-col sm:flex-row bg-white bg-opacity-25 rounded-xl 
                 justify-around items-stretch py-8 sm:py-10 md:py-12 px-4 sm:px-8 w-full mx-auto">
                <div className="flex flex-col justify-around items-center my-6 md:my-4 sm:w-3/5">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-center">
                        {data.name}
                    </h2>
                    <img className="my-6 sm:my-8 max-w-24 sm:max-w-28 md:max-w-32 max-h-20 
                        sm:max-h-24 md:max-h-28 object-scale-down"
                        alt="weather-icon"
                        src={require(`./icons/${data.weather[0].icon}.png`)}
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
                        <DetailsList item={item} feelsLike={feelsLike} 
                        displayUnits={displayUnits} getWindDirection={getWindDirection} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CurrentWeather;