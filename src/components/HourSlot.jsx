import { getFormattedTime } from "../lib/utils";
import WeatherIcon from "./WeatherIcon";

const activeStyles = "bg-neutral-700 border border-neutral-400 rounded-xl";

function HourSlot({ isActive, data }) {
  const time = getFormattedTime(data?.dt_txt);
  const temp = Math.floor(data?.main?.temp);
  const rainPop = data?.pop * 100;
  return (
    <div
      className={`flex flex-col flex-1 shrink-0 items-center text-sm min-w-20 gap-1 py-4 px-2 ${isActive ? activeStyles : ""}`}
    >
      <span className="">{time}</span>
      <WeatherIcon main={data?.weather?.[0]?.main} size={20} className="text-sm text-neutral-500"/>
      <span className="text-base text-neutral-100 ">{temp}</span>
      <span className="text-[#55c9ff] text-xs">{rainPop}%</span>
    </div>
  );
}

export default HourSlot;
