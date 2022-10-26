

function DailyForecast({ data, displayUnits }) {

    const getDay = (day) => {
        let weekDay = new Date(day * 1000).toLocaleDateString(
            'en', { weekday: 'long' });
        return weekDay;
    }

    return (
        <div className="flex my-4 w-11/12 overflow-x-auto rounded-xl h-60 items-stretch">
            {data.map((item, idx) => (
                <div key={idx}
                     className="mx-2 flex flex-col items-center justify-between rounded-xl bg-white bg-opacity-30 w-44 flex-shrink-0">
                    <h4 className="text-white text-shadow text-xl font-bold mt-4">
                        {getDay(item.dt)}
                    </h4>
                    <img className="my-3 w-16"
                         alt='weather icon'
                         src={require(`../icons/${item.weather[0].icon}.png`)} />
                    <p className="text-white text-shadow text-md font-bold mx-5 my-1 text-center">
                        {item.weather[0].description}
                    </p>
                    
                    <p className ="text-white text-shadow font-bold text-xl mb-4">
                        {Math.round(item.temp.min)}{displayUnits[0]} / 
                       {Math.round(item.temp.max)}{displayUnits[0]}</p>
                </div>
            ))}
        </div>

    );

}

export default DailyForecast;