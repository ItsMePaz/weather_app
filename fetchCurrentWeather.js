export default async function fetchCurrentWeather(city) {
  const API_KEY = "1db2cff924a5c91ab8a11fdca6a1067b";
  const CURRENT_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(CURRENT_WEATHER_API);
  const weatherData = await response.json();

  return weatherData;
}
