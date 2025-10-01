const apiKey = "15441a22117d19fb009b29bf57cc6873";

function getWeather() {
  const city = document.getElementById("city").value;
  
  if (!city) {
    document.getElementById("result").innerHTML = "Enter city name!";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const result = document.getElementById("result");
      
      if (data.cod === 200) {
        result.innerHTML = `
          <h3>${data.name}</h3>
          🌡Temperature: ${Math.round(data.main.temp)}°C<br>
          💧Humidirty: ${Math.round(data.main.humidity)}%<br>
          🌍Weather: ${data.weather[0].main}
        `;
      } else {
        result.innerHTML = "❌ City not found!";
      }
    });
}
// const apiKey = "15441a22117d19fb009b29bf57cc6873";

// function getWeather() {
//   let city = document.getElementById("city").value;

//   if (!city) return alert("Enter city name!");

//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//     .then(response => response.json())
//     .then(data => {
//       document.getElementById("result").innerHTML =
//         data.cod != 200 ? "❌ City not found" :
//         `<h3>${data.name}</h3>
//          🌡 ${data.main.temp}°C <br>
//          💧 ${data.main.humidity}% <br>
//          🌍 ${data.weather[0].main}`;
//     });
// }

