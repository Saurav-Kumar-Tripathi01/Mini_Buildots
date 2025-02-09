import React from 'react';

const Xweathercard = ({ data }) => {
  const {
    current: { temp_c, humidity, condition: { text }, wind_kph },
  } = data;

  return (
    <div className="weather-card-container">
      <div className="weather-card">
        <h3>Temperature</h3>
        <p>{temp_c}°C</p>
      </div>
      <div className="weather-card">
        <h3>Humidity</h3>
        <p>{humidity}%</p>
      </div>
      <div className="weather-card">
        <h3>Condition</h3>
        <p>{text}</p>
      </div>
      <div className="weather-card">
        <h3>Wind Speed</h3>
        <p>{wind_kph} kph</p>
      </div>
    </div>
  );
};

export default Xweathercard;