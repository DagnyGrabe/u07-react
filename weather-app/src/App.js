import React from "react";
import axios from "axios";

function App() {


  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  const WEATHER_API_KEY = "ea1bef07164f62c098748d84d35962f1";

  const currentWeatherUrl =
    `${WEATHER_API_URL}/weather?lat=59.32938&lon=18.06871&appid=${WEATHER_API_KEY}&units=metric`;

  const getCurrentWeather = async () => {
    try {
      const response = await axios.get(currentWeatherUrl);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  getCurrentWeather();

  return (
    <div className="App">
      <h1 className="text-2xl text-red-500">hello</h1>
      <p>hello2</p>
    </div>
  );
}

export default App;
