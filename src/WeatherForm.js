import React, { useState } from 'react';
import './WeatherForm.css';

function WeatherForm({ onWeatherData, onFiveWeatherData }) {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/weather?lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      onWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleFive = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/fivedaysweather?lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      onFiveWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleUseCurrentLocation = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        });
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    } catch (error) {
      console.error('Error fetching current location:', error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="latitude">Latitude:</label>
        <input
          type="text"
          id="latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="Enter latitude"
          required
        />
      </div>
      <div>
        <label htmlFor="longitude">Longitude:</label>
        <input
          type="text"
          id="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="Enter longitude"
          required
        />
      </div>
      <button type="button" onClick={handleUseCurrentLocation}>
        Use Current Location
      </button>
      <button type="button" onClick={handleFive}>
        Get Five Days Weather
      </button>
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
