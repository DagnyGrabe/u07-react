import DailyCard from "./daily-card";


function DailyForecast({ data, displayUnits, getWindDirection }) {

    const nextWeek = data.slice(1, 8);


    return (
        <>
            <h3 className="text-2xl font-bold uppercase mt-8">This week</h3>
            <div className="flex py-2 overflow-x-auto rounded-xl items-start">
                {nextWeek.map((item, idx) => (
                    <DailyCard item={item} displayUnits={displayUnits} getWindDirection={getWindDirection} key={idx}/>
                ))}
            </div>
        </>

    );

}

export default DailyForecast;