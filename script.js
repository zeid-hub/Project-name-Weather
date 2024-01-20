document.addEventListener('DOMContentLoaded', () => {
     //How to access input elements
const inputBox = document.querySelector('.input-box')
    // How to access search result elements
const searchBtn = document.getElementById('searchBtn')
   // How to access weather-icon content
const weatherIcon = document.querySelector('.weather-icon')
   // How to access temperature content
const temperature = document.querySelector('.temperature')
  // How to access description content
const description = document.querySelector('.description')
  // How to access humidity content
const humidity = document.querySelector('.humidity')
  // How to access wind Speed content
const windSpeed = document.querySelector('.wind')
  // How to access error content
const locationNotFound = document.querySelector('.location-not-found')
  // How to access weather-body content
const weatherBody = document.querySelector('.weather')


  // Creating a callback function
async function checkWeather(city) {
    // My public Api Key
    const APIKey = "8c1146caa555e7ad9386e0f9ae70abed";
    // The url for my Api Key
    const url =    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`

      //sending a request to the api and waits for response
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
  inputBox.addEventListener('keydown', (event) => {
    // Check if the Enter key is pressed (key code 13)
    if (event.key === 'Enter') {
      checkWeather(inputBox.value);
    }
  });

  searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
  })
}) 