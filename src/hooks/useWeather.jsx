import { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "../services/atmosService";
import { formattedForecast } from "../lib/utils";
import { MIN_LOADING_TIME } from "../lib/constants";

export default function useWeather(city) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timer;
    async function fetchData() {
      const start = Date.now();
      try {
        const [weather, forecast] = await Promise.all([
          getCurrentWeather(city),
          getForecast(city),
        ]);
        setWeatherData(weather);
        setForecastData(formattedForecast(forecast));
      } catch (error) {
        setError(error.message);
      } finally {
        const elapsed = Date.now() - start;
        const remaining = MIN_LOADING_TIME - elapsed;
        timer = setTimeout(() => setLoading(false), remaining);
      }
    }

    fetchData();
    return clearTimeout(timer);
  }, [city]);

  return { weatherData, forecastData, loading, error };
}
