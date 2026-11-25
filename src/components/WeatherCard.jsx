
import WeatherIcon from "./WeatherIcon";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">

      <h2>{weather.name}</h2>

      <WeatherIcon condition={weather.weather[0].main} />

      <h1>{weather.main.temp}°C</h1>

      <p>{weather.weather[0].description}</p>

      <p>Feels Like: {weather.main.feels_like}°C</p>

    </div>
  );
}

export default WeatherCard;
