export const getWeather = (city)=>{
   return fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f285f34296dacf7db0769b29e6c8de9&q=${city}`)
   .then((res)=>res.json())
   .then((data) => {
    const weatherData = {
      description: data.weather[0].description,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      icon: data.weather[0].icon,
    };
    console.log(weatherData)
    return weatherData;
  })
   
}