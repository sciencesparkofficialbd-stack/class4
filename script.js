const inputBox = document.getElementsByClassName("input-box")[0];
const weatherImg = document.getElementsByClassName("weather-image")[0];
const temp = document.getElementsByClassName("temperature")[0];
const desc = document.getElementsByClassName("description")[0];
const humidity = document.getElementById("humidity");
const srcBtn = document.getElementById("searchBtn");
const wind = document.getElementById("wind-speed");
const error = document.getElementsByClassName("error")[0];
const body = document.getElementsByClassName("weather-body")[0];
async function checkWeather(city) {
    city = city.trim();
    if (!city) return;

    const url = `https://api.weatherapi.com/v1/current.json?key=d9b4ae856db141e9a63152353262909&q=${city}&aqi=yes`;

    const response = await fetch(url);
    const weather_data = await response.json();

    if (weather_data.error) {
        error.style.display = "flex";
        body.style.display = "none";
        return;
    }

    error.style.display = "none";
    body.style.display = "flex";

    temp.innerHTML = `${weather_data.current.temp_c}°C`;
    desc.innerHTML = weather_data.current.condition.text;
    humidity.innerHTML = `${weather_data.current.humidity}%`;
    wind.innerHTML = `${weather_data.current.wind_kph} km/h`;
    weatherImg.src = `https:${weather_data.current.condition.icon}`;
}

srcBtn.addEventListener("click", () => checkWeather(inputBox.value));