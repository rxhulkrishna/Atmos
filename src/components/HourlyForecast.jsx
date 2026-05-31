import { Cloud } from "lucide-react";
import HourSlot from "./HourSlot";

function HourlyForecast({ label }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm text-neutral-500">{label}</h3>

      <section className="lg:self-center flex overflow-x-auto bg-neutral-800 rounded-2xl p-4 border border-neutral-700 text-neutral-300 divide-x divide-neutral-700 backdrop-blur-3xl lg:w-full">
        <HourSlot
          time="Now"
          icon={<Cloud />}
          temp="24°"
          rain="80%"
          isActive={true}
        />
        <HourSlot time="6 pm" icon={<Cloud />} temp="24°" rain="80%" />
        <HourSlot time="9 pm" icon={<Cloud />} temp="24°" rain="80%" />
        <HourSlot time="12 am" icon={<Cloud />} temp="24°" rain="80%" />
        <HourSlot time="6 am " icon={<Cloud />} temp="24°" rain="80%" />
        <HourSlot time="9 am" icon={<Cloud />} temp="24°" rain="80%" />
      </section>
    </div>
  );
}

export default HourlyForecast;
