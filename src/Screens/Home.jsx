import PageLoader from "../components/PageLoader";
import { MapPin } from "lucide-react";
import StatCard from "../components/StatCard";
import HourlyForecast from "../components/HourlyForecast";
import WeatherHero from "../components/WeatherHero";
import DailyForecast from "../components/DailyForecast";
import useWeather from "../hooks/useWeather";

function Home() {
  const { weatherData, forecastData, loading, error } = useWeather("Bangalore");

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
    <>
      <header className="flex items-center gap-2 text-base lg:col-span-2 lg:self-start mx-8 my-4">
        <MapPin size="16" /> Bangalore, India
        <div></div>
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
