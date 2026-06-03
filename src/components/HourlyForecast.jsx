import HourSlot from "./HourSlot";

function HourlyForecast({ label, hourlyData }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm text-neutral-500">{label}</h3>

      <section className="lg:self-center flex overflow-x-auto bg-neutral-800 rounded-2xl p-4 border border-neutral-700 text-neutral-300 divide-x divide-neutral-700 backdrop-blur-3xl lg:w-full">
        {hourlyData.map((data) => (
          <HourSlot key={data.dt} data={data} />
        ))}
      </section>
    </div>
  );
}

export default HourlyForecast;
