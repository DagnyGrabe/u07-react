import React, { useEffect, useState } from "react";
import axios from "axios";
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import Weather from "./components/weather/weather";
import Heading from "./components/heading/heading";
import Footer from "./components/footer";

function App() {

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [units, setUnits] = useState('metric');
  const [displayUnits, setDisplayUnits] = useState(['°C', 'm/s']);
  const [timezone, setTimeZone] = useState('UTC');

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
          setTimeZone(forecastResponse.data.timezone);

        } catch (err) {
          console.log(err);
        }
      }
    }
    getWeather();
  }, [lon, units]);

  const weatherProps = {
    currentWeather: currentWeather,
    hourlyForecast: hourlyForecast,
    dailyForecast: dailyForecast,
    displayUnits: displayUnits,
    timezone: timezone
  }

  const headingProps = {
    setLat: setLat,
    setLon: setLon,
    setUnits: setUnits,
    setDisplayUnits: setDisplayUnits
  }

  return (
    <div className="App min-h-screen py-8">
      <Heading props={headingProps} />

      <Weather props={weatherProps} />

      <Footer />

    </div>
  );
}

export default App;
