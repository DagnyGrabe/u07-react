import React, { useEffect, useState } from "react";
import axios from "axios";
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import CurrentWeather from "./components/current-weather";
import UserPositionButton from "./components/user-position-button";
import HourlyForecast from "./components/hourly-forecast";
import DailyForecast from "./components/daily-forecast";


function App() {

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);

  const currentWeatherUrl =
    `${WEATHER_API_URL}2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  const forecastUrl =
    `${WEATHER_API_URL}3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${WEATHER_API_KEY}&units=metric`;

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
  }, [lon]);

  return (
    <div className="App">
      <h1 className="text-2xl text-red-500">hello</h1>
      <UserPositionButton setLat={setLat} setLon={setLon} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {hourlyForecast && <HourlyForecast data={hourlyForecast} />}
      {dailyForecast && <DailyForecast data={dailyForecast} />}
    </div>
  );
}

export default App;
