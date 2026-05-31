import StatItem from "../components/StatItem";
import { Droplet, Sun, Thermometer, Wind } from "lucide-react";

function StatCard() {
  return (
    <section className="grid grid-cols-4 bg-neutral-800 rounded-2xl p-4 border border-neutral-700 divide-x divide-neutral-700 lg:items-center">
      <StatItem icon={<Droplet size="20" />} value={"72%"} title="HUMIDITY" />
      <StatItem
        icon={<Thermometer size="20" />}
        value={"25°"}
        title="FEELS LIKE"
      />
      <StatItem icon={<Wind size="20" />} value={"Mod"} title="WIND" />
      <StatItem icon={<Sun size="20" />} value={"UV 11"} title="INDEX" />
    </section>
  );
}

export default StatCard;
