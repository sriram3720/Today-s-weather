import React, { useState ,useEffect} from "react";
import { getWeather } from "./weather.api";
import weatherImage from "../assets/Sunny day.gif"

import "./App.css";
import { Input } from "antd";
const { Search } = Input;

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error,setError] = useState(null)

  const handleSearch = () => {
 
   getWeather(city).then((data)=>{
     setWeather(data);
     setError(null)
    
   }).catch((err)=>{
    setError('Invalid city');
    setWeather(null);
  })
   
  };

  return (
    <div className="App">
      <h1  className="title">Today's weather</h1>
      <Search
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
        enterButton="Search"
        size="large"
        className="searchBar"
        onSearch={handleSearch}
      />
    {
      weather ?  <div class="weather-card">
      <img class="weather-icon" src={weatherImage} alt="Weather icon" />
      <div class="weather-description">
      <span class="weather-info">
          <div >Description</div>
          <div>{weather?.description}</div>
         </span></div>
      <div class="weather-details">
        <span class="weather-info">
          <div >Temperature</div>
          <div>{weather?.temperature}</div>
         </span>
        <span class="weather-humidity">
        <span class="weather-info">
          <div >Humidity</div>
          <div>{weather?.humidity}</div>
         </span></span>
        <span class="weather-wind-speed">
        <span class="weather-info">
          <div >WindSpeed</div>
          <div>{weather?.windSpeed}</div>
         </span></span>
      </div>
    </div>: null
    }
     {error?  <h1  className="title">{error}</h1>:null}
      </div>
  
  );
}

export default App;
