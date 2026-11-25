
function WeatherDetails({ weather }) {
  return (
    <div className="weather-details">

      <div>
        <h3>Humidity</h3>
        <p>{weather.main.humidity}%</p>
      </div>

      <div>
        <h3>Wind Speed</h3>
        <p>{weather.wind.speed} m/s</p>
      </div>

      <div>
        <h3>Pressure</h3>
        <p>{weather.main.pressure} hPa</p>
      </div>

    </div>
  );
}

export default WeatherDetails;
