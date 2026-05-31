import { useEffect, useState } from "react";
import PageLoader from "../components/PageLoader";
import { MapPin } from "lucide-react";
import StatCard from "../components/StatCard";
import HourlyForecast from "../components/HourlyForecast";
import WeatherHero from "../components/WeatherHero";
import DailyForecast from "../components/DailyForecast";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <main className="flex flex-col pb-8 m-8 gap-5 lg:grid lg:grid-cols-[1fr_1fr] lg:grid-rows-[auto_auto_auto] lg:gap-6 lg:m-12">
      <header className="flex items-center gap-2 text-base lg:col-span-2 lg:self-start">
        <MapPin size="16" /> Bangalore, India
      </header>
      <WeatherHero />
      <StatCard />
      <HourlyForecast label="Hourly" />
      <DailyForecast label="5 Day Forecast"/>
    </main>
  );
}

export default Home;
