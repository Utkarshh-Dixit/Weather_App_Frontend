import React, { useState } from 'react';
import './WeatherDisplay.css'; // Import the CSS file

function WeatherDisplay({ data, onClose }) {
  const { currentWeather } = data;
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertTemperature = (temperature) => {
    if (isCelsius) {
      return (temperature - 273.15).toFixed(2) + '°C';
    } else {
      return ((temperature - 273.15) * 9/5 + 32).toFixed(2) + '°F';
    }
  };

  return (
    <div className="weather-display" id="sd">
       <button className="close-button" onClick={onClose}>❌</button>
      <h2>Current Weather</h2>
      <p><strong>Temperature:</strong> {convertTemperature(currentWeather.temperature)}</p>
      <p><strong>Description:</strong> {currentWeather.description}</p>
      <p><strong>Wind:</strong> {currentWeather.wind}</p>
      <p><strong>Sunrise:</strong> {currentWeather.sunrise}</p>
      <p><strong>Sunset:</strong> {currentWeather.sunset}</p>
      <p><strong>Date:</strong> {currentWeather.date}</p>
      <p><strong>Location:</strong> {currentWeather.city}</p>

      <button onClick={toggleTemperatureUnit} className='switch'>
        Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
}

export default WeatherDisplay;
