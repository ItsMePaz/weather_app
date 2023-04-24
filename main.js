import "./style.css";
import fetchCurrentWeather from "./fetchCurrentWeather";
import appendWeather from "./appendWeather";

const formWeather = document.getElementById("form-weather");
const searchWeatherBtn = document.getElementById("search-weather-btn");
const searchWeatherInput = document.getElementById("search-weather-input");

formWeather.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = searchWeatherInput.value;

  if (input === "") return;

  fetchCurrentWeather(input).then((data) => {
    appendWeather(data);
    searchWeatherInput.value = "";
  });
});
