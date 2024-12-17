const apiKey = "e24d6917b63382cf747981da0b4e9ac8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherDes = document.querySelector(".weather-desc");
const weatherIcon = document.querySelector("#weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".country-code").innerHTML = data.sys.country;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".temp-max").innerHTML = Math.round(data.main.temp_max) + "°C";
    document.querySelector(".temp-min").innerHTML = Math.round(data.main.temp_min) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "assests/images/clouds.png";
        weatherDes.innerText = data.weather[0].description;
    } else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "assests/images/drizzle.png";
        weatherDes.innerText = data.weather[0].description;
    } else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "assests/images/rain.png";
        weatherDes.innerText = data.weather[0].description;
    } else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "assests/images/clear.png";
        weatherDes.innerText = data.weather[0].description;
    } else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "assests/images/mist.png";
        weatherDes.innerText = data.weather[0].description;
    } else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "assests/images/snow.png";
        weatherDes.innerText = data.weather[0].description;
    } else{
        weatherIcon.src = "assests/images/haze.jfif";
        weatherDes.innerText = data.weather[0].description;
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

