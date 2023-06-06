function getWeather() {
    var city = document.getElementById("city").value;
    var apiUrl = "https://api.weather.gov/points/" + city + "/forecast";
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var forecast = data.properties.periods[0].detailedForecast;
        document.getElementById("weather").innerHTML = forecast;
      })
      .catch(error => {
        console.log("An error occurred:", error);
        document.getElementById("weather").innerHTML = "Failed to fetch weather data.";
      });
  }
  