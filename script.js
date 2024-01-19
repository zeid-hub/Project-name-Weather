const inputBox = document.querySelector('.input-box')
const searchBtn = document.getElementById('searchBtn')
const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.wind')
const locationNotFound = document.querySelector('.location-not-found')
const weatherBody = document.querySelector('.weather')



async function checkWeather(city) {
    const APIKey = "8c1146caa555e7ad9386e0f9ae70abed";
    const url =    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`

  
    const weather_data = await fetch(`${url}`)
    .then(response => response.json());


    if (weather_data.cod === '404') {
        locationNotFound.style.display = "block"
        weatherBody.style.display = "none";
        return;
    }

    locationNotFound.style.display = "none"
    weatherBody.style.display = "block";

    temperature.innerHTML = `${Math.round(weather_data.main.temp)}°c`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML    = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML   = `${Math.round(weather_data.wind.speed)}km/h`

    console.log(weatherIcon.src);
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weatherIcon.src = "images/clouds.png"
            break;

        case 'Clear':
             weatherIcon.src = "images/clear.png"
            break;

        case 'Rain':
            weatherIcon.src = "images/Rain.jpg"
            break;

        case 'Haze':
            weatherIcon.src = "images/Haze.jpg"
            break;

       case 'Mist':
            weatherIcon.src = "images/mist.png"
            break;

         case 'Snow':
            weatherIcon.src = "images/snow.png"
            break;  
    
        case 'Light rain':
            weatherIcon.src = "images/lightrain.png"
            break;
            
          
    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
})