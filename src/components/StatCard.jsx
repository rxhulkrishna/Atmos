import StatItem from "../components/StatItem";
import { Droplet, Eye, Thermometer, Wind } from "lucide-react";

function StatCard({ humidity, feelslike, windspeed, visibility }) {
  return (
    <section className="grid grid-cols-4 bg-neutral-800 rounded-2xl p-4 border border-neutral-700 divide-x divide-neutral-700 lg:items-center">
      <StatItem
        icon={<Droplet size="20" />}
        value={`${humidity}%`}
        title="HUMIDITY"
      />
      <StatItem
        icon={<Thermometer size="20" />}
        value={`${Math.floor(feelslike)}°`}
        title="FEELS LIKE"
      />
      <StatItem
        icon={<Wind size="20" />}
        value={`${Math.round(windspeed)} m/s`}
        title="WIND"
      />

      <StatItem
        icon={<Eye size="20" />}
        value={`${Math.ceil(visibility / 1000)} km`}
        title="VISIBILITY"
      />
    </section>
  );
}

export default StatCard;
