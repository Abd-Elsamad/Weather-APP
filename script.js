const searchBtn = document.querySelector(".search-btn");
const cityInput = document.querySelector(".city-input");
const cityName = document.querySelector(".city-name");
const temperature = document.querySelector(".temperature");
const weatherStatus = document.querySelector(".weather-status");
const apiKey="c25a267801c1f455c50c1a0e7a168f84"; 
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", async function () {

    const city = cityInput.value.trim();

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    if (data.cod === "404") {
        alert("City not found.");
        return;
    }

    cityName.textContent = data.name;

    temperature.textContent =
    Math.round(data.main.temp) + "°C";

    weatherStatus.textContent =
    data.weather[0].main;
    const condition = data.weather[0].main;
    if (condition === "Clear") {

        weatherIcon.src = "img/sunny.png";

    }
    else if (condition === "Clouds") {

        weatherIcon.src = "img/clear.png";

    }
    else if (condition === "Rain") {

        weatherIcon.src = "img/rain.png";

    }
    else if (condition === "Snow") {

        weatherIcon.src = "img/snow.png";

    }

    humidity.textContent =
    data.main.humidity + "%";

    wind.textContent =
    data.wind.speed + " km/h";

});