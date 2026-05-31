import { ArrowDown, ArrowUp } from "lucide-react";

function DaySlot({ day, icon, weather, temp }) {
  return (
    <div className="flex items-center justify-between min-h-20">
      <div className="flex items-center gap-3">
        <span className="text-lg text-neutral-100 w-10">{day}</span>
        <span className="w-6 text-neutral-500">{icon}</span>
        <span className="text-sm text-neutral-300 ml-2">{weather}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex text-sm text-neutral-500">
          <ArrowDown size="20" />{" "}
          <span className="text-neutral-300">{temp.low}</span>
        </span>
        <span className="flex text-sm text-neutral-500">
          <ArrowUp size="20" />
          <span className="text-neutral-300">{temp.high}</span>
        </span>
      </div>
    </div>
  );
}

export default DaySlot;
