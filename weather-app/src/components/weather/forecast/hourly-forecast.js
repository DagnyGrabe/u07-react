import HourlyCard from "./hourly-card";



function HourlyForecast({ data, displayUnits, getWindDirection, timezone }) {


    const next24 = data.slice(1, 25);

    return (
        <>
            <h3 className="text-xl sm:text-2xl font-bold uppercase mt-8">Today</h3>
            <div className="flex py-2 overflow-x-auto rounded-xl items-start">
                {next24.map((item, idx) => (
                    <HourlyCard item={item} displayUnits={displayUnits} 
                    getWindDirection={getWindDirection} timezone={timezone} key={idx}/>
                ))}
            </div>
        </>

    );

}

export default HourlyForecast;