import React from 'react';
import { useState } from 'react';
import './FiveDays.css';

function FiveDays({ data, onCloseFive }) {
  const { forecastData, cityInfo } = data;
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
    <div>
        <button className="close-button" onClick={onCloseFive}>❌</button>
      <h2>5-Day Weather Forecast (For every 3 hours)</h2>
      <button className='butcon' onClick={toggleTemperatureUnit}>
        Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'}
      </button>
      {forecastData && (
        <div className="forecast-container">
          {forecastData.map((forecastItem) => (
            <div className="forecast-item" key={forecastItem.dt}>
              <h3>{forecastItem.dt_txt}</h3>
              <p><strong>Temperature: </strong>{convertTemperature(forecastItem.main.temp)}</p>
              <p><strong>Description: </strong>{forecastItem.weather[0].description}</p>
              <p><strong>Location: </strong>{cityInfo.name}</p>
              {/* You can add more details here if needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FiveDays;
