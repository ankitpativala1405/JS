const getlocation=()=>{
  navigator.geolocation.getCurrentPosition((pos)=>{
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    getWeather(lat,lon)

  })
}

getlocation()

const getWeather = async (lat,lon) => {
  let req = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=94b46ca7cd7141acc5d25e22292b9cfb&units=metric`
  );
  let res = await req.json();
  console.log(res);
  uimaker(res);
};

const uimaker = (data) => {
  let temp = `
    <header>
      <h1>Weather Dashboard</h1>
      <p>🌍 ${data.name}, ${data.sys.country}</p>
    </header>

    <section class="current-weather">
      <div class="icon">⛅</div>
      <div class="info">
        <h2>${data.main.temp}°C</h2>
        <p>${data.weather[0].description}</p>
        <div class="details">
          <span>Humidity: ${data.main.humidity}%</span>
          <span>Wind: ${data.wind.speed} km/h</span>
          <span>Feels like: ${data.main.feels_like}°C</span>
        </div>
      </div>
    </section>

    <section class="forecast">
      <h3>5-Day Forecast</h3>
      <div class="forecast-grid">
        <!-- Hardcoded for now. You can update this with actual forecast data later -->
        <div class="day">
          <p>Mon</p>
          <div>☀️</div>
          <p>25°C</p>
        </div>
        <div class="day">
          <p>Tue</p>
          <div>⛅</div>
          <p>22°C</p>
        </div>
        <div class="day">
          <p>Wed</p>
          <div>🌧️</div>
          <p>19°C</p>
        </div>
        <div class="day">
          <p>Thu</p>
          <div>🌩️</div>
          <p>17°C</p>
        </div>
        <div class="day">
          <p>Fri</p>
          <div>☀️</div>
          <p>24°C</p>
        </div>
      </div>
    </section>
  `;

  document.getElementById("container").innerHTML = temp;
}

