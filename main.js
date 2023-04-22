import "./style.css";
import fetchCurrentWeather from "./src/fetchCurrentWeather";
import init from "./src/initializeWeather";

fetchCurrentWeather("Quezon City").then((data) => init(data));
