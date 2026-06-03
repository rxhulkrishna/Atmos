const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}

export function getCurrentWeather(city) {
  return fetchData(
    `${API_URL}/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
  );
}

export function getForecast(city) {
  return fetchData(
    `${API_URL}/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`,
  );
}

export function searchCities(query) {
  return fetchData(
    `${API_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`,
  );
}
