
import { useState } from "react";

import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import WeatherDetails from "../components/WeatherDetails";
import Loading from "../components/Loading";

import { getWeather } from "../services/weatherService";

import "../App.css";

function Home() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = async () => {

    if (city === "") {
      setError("Please enter city name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);

      setWeather(data);

    } catch (error) {
      setError(error.message);
      setWeather(null);
    }

    setLoading(false);
  };

  return (
    <div className="container">

      <h1>Weather App</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={searchWeather}
      />

      {loading && <Loading />}

      {error && <p className="error">{error}</p>}

      {weather && !loading && (
        <>
          <WeatherCard weather={weather} />

          <WeatherDetails weather={weather} />
        </>
      )}

    </div>
  );
}

export default Home;
