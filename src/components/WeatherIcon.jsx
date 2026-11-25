
function WeatherIcon({ condition }) {

  if (condition === "Clear") {
    return <h1>☀️</h1>;
  }

  if (condition === "Clouds") {
    return <h1>☁️</h1>;
  }

  if (condition === "Rain") {
    return <h1>🌧️</h1>;
  }

  if (condition === "Drizzle") {
    return <h1>🌦️</h1>;
  }

  if (condition === "Thunderstorm") {
    return <h1>⛈️</h1>;
  }

  if (condition === "Snow") {
    return <h1>❄️</h1>;
  }

  return <h1>🌤️</h1>;
}

export default WeatherIcon;
