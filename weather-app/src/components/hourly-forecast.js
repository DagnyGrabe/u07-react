import HourlyCard from "./hourly-card";



function HourlyForecast({ data, displayUnits, getWindDirection }) {


    const next24 = data.slice(1, 25);

    return (
        <>
            <h3 className="text-2xl font-bold uppercase mt-8">Today</h3>
            <div className="flex py-2 overflow-x-auto rounded-xl items-start">
                {next24.map((item) => (
                    <HourlyCard item={item} displayUnits={displayUnits} getWindDirection={getWindDirection} />
                ))}
            </div>
        </>

    );

}

export default HourlyForecast;