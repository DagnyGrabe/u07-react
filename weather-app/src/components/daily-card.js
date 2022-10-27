import { useState } from "react";
import DetailsList from "./details-list";
import ExpandButton from "./expand-button";


function DailyCard({ item, displayUnits, getWindDirection }) {

    const [expanded, setExpanded] = useState(false);

    const getDay = (day) => {
        let weekDay = new Date(day * 1000).toLocaleDateString(
            'en', { weekday: 'long' });
        return weekDay;
    }

    return (
        <div className="mx-2 rounded-xl bg-white bg-opacity-30 w-48 flex-shrink-0">
            <div className="flex flex-col justify-between items-center h-52">
                <h4 className="text-xl font-bold mt-4">
                    {getDay(item.dt)}
                </h4>
                <img className="my-3 w-16"
                    alt='weather icon'
                    src={require(`../icons/${item.weather[0].icon}.png`)} />
                <p className="text-md font-bold mx-5 my-1 text-center">
                    {item.weather[0].description}
                </p>

                <p className="font-bold text-xl mb-2">
                    {Math.round(item.temp.min)}{displayUnits[0]} /
                    {Math.round(item.temp.max)}{displayUnits[0]}
                </p>
            </div>

            <div className={`${expanded ? "" : "hidden"} text-sm py-2 px-4`}>
                <DetailsList item={item} displayUnits={displayUnits} getWindDirection={getWindDirection} />
            </div>
            <ExpandButton expanded={expanded} setExpanded={setExpanded} />
        </div>
    );

}

export default DailyCard;