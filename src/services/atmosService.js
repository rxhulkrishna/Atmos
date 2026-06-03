async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}

export function getCurrentWeather(city) {
  return fetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3a0e2cf609cf7509de77266bd18d636e`,
  );
}

export function getForecast(city) {
  return fetchData(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=3a0e2cf609cf7509de77266bd18d636e`,
  );
}
