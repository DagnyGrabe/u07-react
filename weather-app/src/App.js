import React, { useState, useEffect } from "react";
import axios from "axios";
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import CurrentWeather from "./components/current-weather";


function App() {

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const getUserCoordinates = async () => {

    const getCoords = () => new Promise((success, error) => 
    navigator.geolocation.getCurrentPosition(success, error));

    try {
      const response = await getCoords();
      setLat(response.coords.latitude);
      setLon(response.coords.longitude);
    } catch (err) {
      console.log(err);
    }

  }


  const currentWeatherUrl =
    `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

  const [currentWeather, setCurrentWeather] = useState(null);


  const getCurrentWeather = async () => {
    try {
      const response = await axios.get(currentWeatherUrl);
      console.log(response);
      setCurrentWeather(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h1 className="text-2xl text-red-500">hello</h1>
      <button
        onClick={() => getUserCoordinates()}>Use my location</button>
      {currentWeather && <CurrentWeather data={currentWeather} />}


    </div>
  );
}

export default App;
