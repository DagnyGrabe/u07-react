import { useState } from "react";
import ExpandButton from "./expand-button";


function HourlyCard({ item, displayUnits, getWindDirection }) {

    const getHour = (time) => {
        let hour = new Date(time * 1000).toLocaleTimeString(
            [], { hour: '2-digit', hour12: false });
        return hour;
    }

    const [expanded, setExpanded] = useState(false);


    return (
        <div className="mx-1 rounded-xl bg-white bg-opacity-30 w-32 flex-shrink-0 text-center">
            <div className="h-24 flex flex-col items-center">
                <h4 className="text-xl font-bold my-4">
                    {getHour(item.dt)}
                </h4>
                <span className="flex flex-row">
                    <img alt='weather icon'
                        src={require(`../icons/${item.weather[0].icon}.png`)}
                        className="w-10 mr-4"
                    />
                    <p className="text-lg font-bold">
                        {Math.round(item.temp)}{displayUnits[0]}
                    </p>
                </span>
            </div>
            <div className={expanded ? "" : "hidden"}>
                <p className="mx-3 text-sm mb-1">
                    {item.weather[0].description}
                </p>
                <p className="mx-3 text-sm mb-1">
                    feels like
                </p>
                <p className="mx-3 text-sm mb-1">
                    {Math.round(item.feels_like)} {displayUnits[0]}
                </p>

                <p className="mx-3 text-sm mb-1">
                    {getWindDirection(item.wind_deg)} {Math.round(item.wind_speed)} {displayUnits[1]}
                </p>
            </div>
            <ExpandButton expanded={expanded} setExpanded={setExpanded} />

        </div>
    );
}

export default HourlyCard;