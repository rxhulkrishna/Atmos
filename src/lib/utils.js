export function formattedForecast(forecastData) {
  return {
    hourly: forecastData.list.slice(0, 8),
    daily: {
      weather: forecastData.list.filter((data) =>
        filterDailyForecast(data.dt_txt),
      ),
      dailyHighLow: getDailyHighLow(forecastData.list),
    },
  };
}

export function getDay(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "short" });
}

export function filterDailyForecast(date) {
  const time = new Date(date).getHours();
  return time === 9;
}

export function getFormattedTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", { hour: "numeric", hour12: true });
}

function getDailyHighLow(list) {
  const today = new Date().toISOString().split("T")[0];
  return list
    .filter((data) => data.dt_txt.split(" ")[0] > today)
    .reduce((acc, item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!acc[date]) {
        acc[date] = {
          low: item.main.temp_min,
          high: item.main.temp_max,
        };
      } else {
        acc[date].low = Math.min(acc[date].low, item.main.temp_min);
        acc[date].high = Math.max(acc[date].high, item.main.temp_max);
      }
      return acc;
    }, {});
}
