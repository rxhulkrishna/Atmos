import { useEffect, useState } from "react";
import PageLoader from "../components/PageLoader";
import { MapPin } from "lucide-react";
import StatCard from "../components/StatCard";
import HourlyForecast from "../components/HourlyForecast";
import WeatherHero from "../components/WeatherHero";
import DailyForecast from "../components/DailyForecast";
import { getCurrentWeather, getForecast } from "../services/atmosService";
import { formattedForecast } from "../lib/utils";
import { MIN_LOADING_TIME } from "../lib/constants";

function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  let timer;

  useEffect(() => {
    async function fetchData() {
      const start = Date.now();
      try {
        const [weather, forecast] = await Promise.all([
          getCurrentWeather("Bangalore"),
          getForecast("Bangalore"),
        ]);
        setWeatherData(weather);
        setForecastData(formattedForecast(forecast));
      } catch (error) {
        console.error(error);
      } finally {
        const elapsed = Date.now() - start;
        const remaining = MIN_LOADING_TIME - elapsed;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timer = setTimeout(() => setLoading(false), remaining);
      }
    }

    fetchData();
    return clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <header className="flex items-center gap-2 text-base lg:col-span-2 lg:self-start m-8">
        <MapPin size="16" /> Bangalore, India
        <div>
          
        </div>
      </header>
      <main className="flex flex-col pb-8 m-8 gap-5 lg:grid lg:grid-cols-[1fr_1fr] lg:grid-rows-[auto_auto_auto] lg:gap-6 lg:m-12">
        <WeatherHero main={weatherData?.main} weather={weatherData?.weather} />
        <StatCard
          humidity={weatherData?.main?.humidity}
          feelslike={weatherData?.main?.feels_like}
          windspeed={weatherData?.wind?.speed}
          visibility={weatherData?.visibility}
        />
        <HourlyForecast hourlyData={forecastData?.hourly} label="Hourly" />
        <DailyForecast dailyData={forecastData?.daily} label="5 Day Forecast" />
      </main>
    </>
  );
}

export default Home;
