import { CloudRainIcon } from "lucide-react";

function WeatherHero() {
  return (
    <section className="flex flex-col items-center lg:self-center">
      <span className="heading text-9xl tracking-tighter">28°</span>
      <span className="flex gap-4 relative right-3 text-lg font-extralight items-center">
        <CloudRainIcon size="20" />{" "}
        <span className="tracking-widest">CLOUDY</span>
      </span>
      <div className="flex gap-2 mt-1">
        <span className="flex gap-2 relative right-3 text-lg items-center text-neutral-100">
          <span className="text-neutral-500">H:</span> 31°
        </span>
        <span className="flex gap-2 relative right-3 text-lg items-center">
          <span className="text-neutral-500">L:</span> 22°
        </span>
      </div>
    </section>
  );
}

export default WeatherHero;
