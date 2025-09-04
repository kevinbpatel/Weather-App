import "./styles.css";
import { hitApi } from "./api-handler.js";

async function getWeather(locationInput) {
  // get title container and location input
  const titlesContainer = document.getElementById("titles-container");

  // get api output
  const apiOutput = await hitApi(locationInput);

  // add data to title container
  const weatherData = document.createElement("div");
  weatherData.textContent = apiOutput;
  titlesContainer.appendChild(weatherData);
}

const locationInput = document.getElementById("location-input");
locationInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getWeather(locationInput.value);
  }
});
