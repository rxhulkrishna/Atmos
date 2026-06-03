import DaySlot from "./DaySlot";

function DailyForecast({ label, dailyData }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm text-neutral-500">{label}</h3>
      <section className="flex flex-col justify-between overflow-x-auto bg-neutral-800 rounded-2xl py-2 px-4 border border-neutral-700 text-neutral-300 divide-y divide-neutral-700">
        {dailyData?.weather.map((data) => {
          return (
            <DaySlot
              key={data.dt}
              weatherData={data}
              highLowData={dailyData?.dailyHighLow[data.dt_txt.split(" ")[0]]}
            />
          );
        })}
      </section>
    </div>
  );
}

export default DailyForecast;
