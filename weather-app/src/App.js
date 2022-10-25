import React, { useEffect, useState } from "react";
import axios from "axios";
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import CurrentWeather from "./components/current-weather";
import UserPositionButton from "./components/user-position-button";


function App() {

  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const WeatherUrl =
    `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${WEATHER_API_KEY}&units=metric`;

  useEffect(() => {

    const getWeather = async () => {
      if (lat && lon) {
        try {
          const response = await axios.get(WeatherUrl);

          console.log(response);
          setCurrentWeather(response.data.current);
          //setForecast(forecastResponse.data);
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


    </div>
  );
}

export default App;
