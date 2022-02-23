let date = document.querySelector(".actual-date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
date.innerHTML = `${
  days[new Date().getDay()]
}, ${new Date().getHours()}:${new Date().getMinutes()}`;
let searchedCity = document.querySelector("#searched-city");
let cityName = searchedCity.value;

function change(response) {
  let temp = document.querySelector("#temp");
  let location = document.querySelector("#here");
  location.innerHTML = response.data.name;
  temp.innerHTML = Math.round(response.data.main.temp);
}

function changeTempC(city) {
  let apiKey = "7a3a06bc53009599c7a0058ddd4c4727";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(url).then(change);
  let celsius = document.querySelector("#celsius");
  let fahrenheit = document.querySelector("#fahrenheit");
  celsius.innerHTML = "<strong>°C </strong>";
  fahrenheit.innerHTML = " °F";
}
function changeTempF(city) {
  let apiKey = "7a3a06bc53009599c7a0058ddd4c4727";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  axios.get(url).then(change);
  let celsius = document.querySelector("#celsius");
  let fahrenheit = document.querySelector("#fahrenheit");
  celsius.innerHTML = "°C ";
  fahrenheit.innerHTML = "<strong> °F </strong>";
}
let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  let searchedCity = document.querySelector("#searched-city");
  let cityName = searchedCity.value;
  changeTempC(cityName);
});

celsius.addEventListener("click", function (event) {
  event.preventDefault();

  changeTempC(cityName);
});
fahrenheit.addEventListener("click", function (event) {
  event.preventDefault();
  let searchedCity = document.querySelector("#searched-city");
  let cityName = searchedCity.value;
  changeTempF(cityName);
});
function showCurrentInfos(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "7a3a06bc53009599c7a0058ddd4c4727";

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(url).then(change);
}

let buttonCurrent = document.querySelector("#here-now");
buttonCurrent.addEventListener("click", function (event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentInfos);
});
changeTempC("paris");
