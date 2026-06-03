import { ArrowDown, ArrowUp } from "lucide-react";
import { getDay } from "../lib/utils";
import WeatherIcon from "./WeatherIcon";

function DaySlot({ weatherData, highLowData }) {
  const day = getDay(weatherData?.dt_txt);
  const lowTemp = Math.floor(highLowData?.low);
  const highTemp = Math.floor(highLowData?.high);
  const desc = weatherData?.weather[0]?.description;

  return (
    <div className="flex items-center justify-between min-h-20">
      <div className="flex items-center gap-3">
        <span className="text-sm lg:text-lg text-neutral-100 w-10">{day}</span>
        <WeatherIcon
          main={weatherData?.weather?.[0]?.main}
          size={20}
          className="text-sm text-neutral-500"
        />

        <span className="text-sm text-neutral-300 ml-2 capitalize">{desc}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex text-sm text-neutral-500">
          <ArrowDown size="20" />{" "}
          <span className="text-neutral-300">{lowTemp}</span>
        </span>
        <span className="flex text-sm text-neutral-500">
          <ArrowUp size="20" />
          <span className="text-neutral-300">{highTemp}</span>
        </span>
      </div>
    </div>
  );
}

export default DaySlot;
