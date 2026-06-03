import PageLoader from "../components/PageLoader";
import StatCard from "../components/StatCard";
import HourlyForecast from "../components/HourlyForecast";
import WeatherHero from "../components/WeatherHero";
import DailyForecast from "../components/DailyForecast";
import useWeather from "../hooks/useWeather";
import SearchHeader from "../components/SearchHeader";
import { useState } from "react";
import { DEFAULT_CITY } from "../lib/constants";

function Home() {
  const [location, setLocation] = useState(DEFAULT_CITY);
  const { weatherData, forecastData, loading, error } = useWeather(location);
  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 justify-center h-screen">
        <p className="text-lg">
          Failed to load weather data. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-transparent text-white rounded-xl border border-neutral-500 hover:bg-neutral-500/10 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-4 px-6 lg:p-12">
      <SearchHeader location={location} setLocation={setLocation} />
      <main className="flex flex-col pb-8 gap-5 lg:grid lg:grid-cols-[1fr_1fr] lg:grid-rows-[auto_auto_auto] lg:gap-6 lg:m-12">
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
    </div>
  );
}

export default Home;
