import CurrentWeather from "./current-weather";
import HourlyForecast from "./forecast/hourly-forecast";
import DailyForecast from "./forecast/daily-forecast";

function Weather({props}) {

    const getWindDirection = (angle) => {
        const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
        return directions[Math.round(angle / 45) % 8];
    }

    return (
        <div className="container w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto mt-4 mb-12 flex 
             flex-col justify-start text-white text-shadow">

            {props.currentWeather && <CurrentWeather data={props.currentWeather} 
                item={props.dailyForecast[0]} displayUnits={props.displayUnits} 
                getWindDirection={getWindDirection} timezone={props.timezone} />}

            {props.hourlyForecast && <HourlyForecast data={props.hourlyForecast}
                displayUnits={props.displayUnits} getWindDirection={getWindDirection} 
                timezone={props.timezone} />}

            {props.dailyForecast && <DailyForecast data={props.dailyForecast}
                displayUnits={props.displayUnits} getWindDirection={getWindDirection} 
                timezone={props.timezone} />}
        </div>
    );

}

export default Weather;