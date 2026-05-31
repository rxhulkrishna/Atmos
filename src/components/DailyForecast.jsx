import { Cloud, CloudRain, Sun } from "lucide-react";
import DaySlot from "./DaySlot";

function DailyForecast({ label }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm text-neutral-500">{label}</h3>
      <section className="flex flex-col justify-between overflow-x-auto bg-neutral-800 rounded-2xl py-2 px-4 border border-neutral-700 text-neutral-300 divide-y divide-neutral-700">
        <DaySlot
          day="Mon"
          icon={<Sun size="20" />}
          weather="Sunny"
          temp={{ low: "20°", high: "31°" }}
        />
        <DaySlot
          day="Tue"
          icon={<Cloud size="20" />}
          weather="Cloudy"
          temp={{ low: "20°", high: "31°" }}
        />
        <DaySlot
          day="Wed"
          icon={<CloudRain size="20" />}
          weather="Rain"
          temp={{ low: "20°", high: "31°" }}
        />
        <DaySlot
          day="Thr"
          icon={<CloudRain size="20" />}
          weather="Rain"
          temp={{ low: "20°", high: "31°" }}
        />
        <DaySlot
          day="Fri"
          icon={<Sun size="20" />}
          weather="Sunny"
          temp={{ low: "20°", high: "31°" }}
        />
      </section>
    </div>
  );
}

export default DailyForecast;
