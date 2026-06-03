// import { getWeatherIcon } from "../constants";

import WeatherIcon from "./WeatherIcon";

function WeatherHero({main, weather}) {
  // const Icon = getWeatherIcon(weather?.[0]?.main);
  return (
    <section className="flex flex-col items-center lg:self-center">
      <span className="heading text-9xl tracking-tighter">{Math.floor(main?.temp)}°</span>
      <span className="flex gap-2 relative right-3 text-sm lg:text-lg font-extralight items-center">
        {/* <CloudRainIcon size="20" />{" "} */}
        {/* <img src={`https://openweathermap.org/img/w/${weather?.[0].icon}.png`}/> */}
        <WeatherIcon main={weather?.[0]?.main} size={20}/>
        <span className="tracking-widest capitalize">{weather?.[0].description}</span>
      </span>
      <div className="flex gap-2 mt-1">
        <span className="flex gap-2 relative right-3 text-sm lg:text-lg items-center text-neutral-100">
          <span className="text-neutral-500">H:</span> {Math.floor(main?.temp_max)}°
        </span>
        <span className="flex gap-2 relative right-3 text-sm lg:text-lg items-center">
          <span className="text-neutral-500">L:</span> {Math.floor(main?.temp_min)}°
        </span>
      </div>
    </section>
  );
}

export default WeatherHero;
