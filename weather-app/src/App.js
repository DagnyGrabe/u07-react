import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import CurrentWeather from "./components/current-weather";
import UserPositionButton from "./components/user-position-button";
import HourlyForecast from "./components/hourly-forecast";
import DailyForecast from "./components/daily-forecast";
import UnitsButton from "./components/units-button";


function App() {

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [units, setUnits] = useState('metric');
  const [displayUnits, setDisplayUnits] = useState(['°C', 'm/s']);


  const currentWeatherUrl =
    `${WEATHER_API_URL}2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${units}`;
  const forecastUrl =
    `${WEATHER_API_URL}3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${WEATHER_API_KEY}&units=${units}`;

  useEffect(() => {

    const getWeather = async () => {
      if (lat && lon) {
        try {
          const currentResponse = await axios.get(currentWeatherUrl);
          const forecastResponse = await axios.get(forecastUrl);

          console.log(currentResponse);
          console.log(forecastResponse);
          setCurrentWeather(currentResponse.data);
          setHourlyForecast(forecastResponse.data.hourly);
          setDailyForecast(forecastResponse.data.daily);

        } catch (err) {
          console.log(err);
        }
      }
    }
    getWeather();
  }, [lon, units]);

  const getWindDirection = (angle) => {
    const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
    return directions[Math.round(angle / 45) % 8];
  }

  return (
    <div className="App">
      <h1 className="text-red-500 text-shadow m-24">hello</h1>
      <UserPositionButton setLat={setLat} setLon={setLon} />
      <UnitsButton setUnits={setUnits} setDisplayUnits={setDisplayUnits} />
      <div className="container w-10/12 lg:w-9/12 xl:w-8/12 mx-auto my-12 flex flex-col justify-start text-white text-shadow">
        {currentWeather && <CurrentWeather data={currentWeather} item={dailyForecast[0]} displayUnits={displayUnits} getWindDirection={getWindDirection} />}
        
        {hourlyForecast && <HourlyForecast data={hourlyForecast} displayUnits={displayUnits} getWindDirection={getWindDirection} />}
        
        {dailyForecast && <DailyForecast data={dailyForecast} displayUnits={displayUnits} getWindDirection={getWindDirection} />}
      </div>
    </div>
  );
}

export default App;
