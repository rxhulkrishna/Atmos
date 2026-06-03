import {
  Cloud,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
  Wind,
  Sun,
  Tornado,
} from "lucide-react";

function WeatherIcon({ main, ...props }) {
  switch (main?.toLowerCase()) {
    case "thunderstorm":
      return <CloudLightning {...props} />;
    case "drizzle":
      return <CloudDrizzle {...props} />;
    case "rain":
      return <CloudRain {...props} />;
    case "snow":
      return <CloudSnow {...props} />;
    case "mist":
    case "haze":
    case "fog":
      return <CloudFog {...props} />;
    case "smoke":
    case "dust":
    case "sand":
    case "ash":
    case "squall":
      return <Wind {...props} />;
    case "tornado":
      return <Tornado {...props} />;
    case "clear":
      return <Sun {...props} />;
    case "clouds":
      return <Cloud {...props} />;
    default:
      return <Cloud {...props} />;
  }
}

export default WeatherIcon;
