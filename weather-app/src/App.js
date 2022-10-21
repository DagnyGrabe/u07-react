import React, { useState, useEffect } from "react";
import axios from "axios";
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';


function App() {

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [error, setError] = useState(null);

  const geolocationAPI = navigator.geolocation;

  useEffect(() => {
    const getUserCoordinates = () => {
      if (!geolocationAPI) {
        setError('Geolocation API is not available in your browser!')
      } else {
        geolocationAPI.getCurrentPosition((position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLon(coords.longitude);
        }, (error) => {
          setError('Something went wrong getting your position!')
        })
      }
      console.log(error);
    }
    getUserCoordinates();
  }, []);

  const currentWeatherUrl =
    `${WEATHER_API_URL}/weather?lat=59.32938&lon=18.06871&appid=${WEATHER_API_KEY}&units=metric`;

  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const getCurrentWeather = async () => {
      try {
        const response = await axios.get(currentWeatherUrl);
        console.log(response);
        setCurrentWeather(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getCurrentWeather();
  }, []);



  return (
    <div className="App">
      <h1 className="text-2xl text-red-500">hello</h1>
      <p>{lat}, {lon}</p>


    </div>
  );
}

export default App;
