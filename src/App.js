// App.js

import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';
import './App.css';
import FiveDays from './FiveDays';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [fiveWeatherData, setFiveWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  const onClose = () => {
    setWeatherData(null);
  };

  const onCloseFive = () => {
    setFiveWeatherData(null);
  };
  
  const handleFiveWeatherData = (data) => {
    setFiveWeatherData(data);
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <WeatherForm onWeatherData={handleWeatherData} onFiveWeatherData={handleFiveWeatherData}/>
      {weatherData && <WeatherDisplay data={weatherData} onClose={onClose}/>}
      {fiveWeatherData && <FiveDays data={fiveWeatherData} onCloseFive={onCloseFive}/>}
    </div>
  );
}

export default App;
