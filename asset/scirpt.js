const cityName = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");

const searchCity = document.querySelector(".search-city");
const notfound = document.querySelector(".not-found");
const weatherinfoSection = document.querySelector(".weather-info");

const countryTxt = document.querySelector(".country-txt");
const tempTxt = document.querySelector(".temp-txt");
const conditionTxt = document.querySelector(".condition-txt");
const humidityTxt = document.querySelector(".humidity-value-txt");
const windTxt = document.querySelector(".wind-value-txt");
const weatherTxt = document.querySelector(".weather-summary-img");
const currentDateTxt = document.querySelector(".current-date-txt");

const forecastItemsContainer = document.querySelector(
  ".forecast-items-container"
);

const apikey = "f9af23a58bc2a9a29943bd95d5dc53af";

searchBtn.addEventListener("click", async () => {
  if (cityName.value.trim() !== "") {
    await updateWeatherinfo(cityName.value);
    cityName.value = "";
    cityName.blur();
  }
});

cityName.addEventListener("keydown", async (event) => {
  if (event.key === "Enter" && cityName.value.trim() !== "") {
    await updateWeatherinfo(cityName.value);
    cityName.value = "";
    cityName.blur();
  }
});

function getWeatherIcon(id) {
  if (id <= 232) return "thunderstorm.svg";
  if (id <= 321) return "drizzle.svg";
  if (id <= 531) return "rain.svg";
  if (id <= 622) return "snow.svg";
  if (id <= 781) return "atmosphere.svg";
  if (id === 800) return "clear.svg";
  return "clouds.svg";
}

async function getFetchData(endPoint, city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apikey}&units=metric`;
  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("City not found or API issue.");
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return { cod: 404 };
  }
}

async function updateWeatherinfo(city) {
  const weatherData = await getFetchData("weather", city);
  if (weatherData.cod !== 200) {
    showDisplaySection(notfound);
    return;
  }

  showDisplaySection(weatherinfoSection);

  const {
    name: cityName,
    main: { temp, humidity },
    weather: [{ id, main }],
    wind: { speed },
    sys: { country },
  } = weatherData;

  countryTxt.textContent = `${cityName}, ${country}`;
  tempTxt.textContent = Math.round(temp) + `°C`;
  humidityTxt.textContent = `${humidity}%`;
  windTxt.textContent = `${speed} m/s`;
  conditionTxt.textContent = main;
  weatherTxt.src = `/asset/assets/weather/${getWeatherIcon(id)}`;
  currentDateTxt.textContent = new Date().toLocaleDateString();

  await updateForcastInfo(city);
}

function showDisplaySection(section) {
  [weatherinfoSection, searchCity, notfound].forEach((sec) => {
    sec.style.display = "none";
  });
  section.style.display = "flex";
}

async function updateForcastInfo(city) {
  const forecastsData = await getFetchData("forecast", city);
  if (forecastsData.cod !== "200") {
    console.error("Error fetching forecast data");
    return;
  }

  const timeTaker = "12:00:00";
  const todayDate = new Date().toISOString().split("T")[0];

  forecastItemsContainer.innerHTML = "";

  forecastsData.list.forEach((forecastWeather) => {
    if (
      forecastWeather.dt_txt.includes(timeTaker) &&
      !forecastWeather.dt_txt.includes(todayDate)
    ) {
      updateForcastInfoItems(forecastWeather);
    }
  });
}

function updateForcastInfoItems(weatherData) {
  const {
    dt_txt: date,
    weather: [{ id }],
    main: { temp },
  } = weatherData;

  const dateTaken = new Date(date);
  const dateOption = {
    day: "2-digit",
    month: "short",
  };

  const dateResult = dateTaken.toLocaleDateString("en-US", dateOption);

  const forecastItem = `
                <div class="forecast-item">
                    <h5 class="forecast-item-date regular-txt">${dateResult}</h5>
                    <img src="/asset/assets/weather/${getWeatherIcon(id)}" alt="" class="forecast-item-img">
                    <h5 class="forecast-item-temp">${Math.round(temp)} &#8451;</h5>
                </div>
    `;

  forecastItemsContainer.insertAdjacentHTML("beforeend", forecastItem);
}
