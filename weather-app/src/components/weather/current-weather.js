import DetailsList from "./details-list";


const CurrentWeather = ({ data, item, displayUnits, getWindDirection, timezone }) => {

    const feelsLike = data.main.feels_like;


    return (
        <>
            <h3 className="uppercase text-xl sm:text-2xl font-bold mt-2 lg:mt-8 mb-2">Current</h3>
            <div className="flex flex-col sm:flex-row bg-white bg-opacity-25 rounded-xl 
                 justify-between lg:justify-around items-stretch py-8 sm:py-10 md:py-12 
                 px-4 sm:px-8 md:px-12 w-full">
                <div className="flex flex-col justify-around items-center my-6 md:my-4 
                     sm:w-3/5">
                    <h2 className="text-2xl xs:text-3xl lg:text-4xl uppercase font-bold text-center">
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

                <div className="flex flex-col justify-between items-center sm:items-end sm:ml-4">
                    <p className="text-6xl sm:text-7xl font-bold mb-6 sm:mb-8">
                        {Math.round(data.main.temp)}{displayUnits[0]}
                    </p>
                    <div className="text-sm md:text-md sm:pl-2 w-2/3 xs:w-1/2 sm:w-full">
                        <DetailsList item={item} feelsLike={feelsLike} 
                        displayUnits={displayUnits} getWindDirection={getWindDirection}
                        timezone={timezone} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CurrentWeather;