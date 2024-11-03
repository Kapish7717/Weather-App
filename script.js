const apiKey = "65998f5bac1945b0de489f2ee070d5d2";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const x = document.getElementById("demo");
const liveLocation = document.querySelector("#live-location");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "img/images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "img/images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "img/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "img/images/mist.png";
  }
  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

checkWeather();

// liveLocation.addEventListener("click", () => {
//   function getGeolocation() {
//     try {
//       navigator.geolocation.getCurrentPosition(success, error);
//     } catch {
//       x.innerHTML = error;
//     }
//   }

//   function success(position) {
//     const lat = position.coords.latitude;
//     const lng = position.coords.longitude;

//     console.log(`Latitude: ${lat} , Longitude: ${lng}`);
//     getAreaname(lat, lng);
//   }

//   function getAreaname(lat, lng) {
//     const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKey}`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.features.length > 0) {
//           const areaName =
//             data.features[0].properties.city ||
//             data.features[0].properties.state ||
//             "Area not found";
//           document.querySelector(".city").innerHTML = `${areaName}`;
//         } else {
//           x.innerHTML = "area not found";
//         }
//       });
//   }
//   checkWeather(areaName);
// });
