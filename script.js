function getWeather() {
    let city = document.getElementById("cityInput").value.trim();
    let apiKey = "f65ac5077450ae2c976530257fe3faf7"; 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weatherResult").innerHTML = `
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(() => alert("City not found"));
}
