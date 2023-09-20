//h2 function that shows date

let now = new Date();

      let h2 = document.querySelector("h2");

      let date = now.getDate();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let year = now.getFullYear();
      let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[now.getDay()];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let month = months[now.getMonth()];
    
    h2.innerHTML = `${day}, ${month}, ${date}, ${year}`;

// h3 function that shows the city that's been searched for in form

function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let cityName = searchInput.value;
  
    if (cityName) {
      let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
  
      axios.get(apiUrl).then(showTemperature);
    } else {
      alert("Please type a city");
    }
  /*   let displayCity = document.querySelector("h3");
    displayCity.innerHTML = `${.data.name}`; */
  }
    let form = document.querySelector("#search-form");
    form.addEventListener("submit", search);

// functions of temperature and current location

function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let cityName = response.data.name;
    let displayCity = document.querySelector("#city-name");
    displayCity.innerHTML = cityName;
    let displayTemperature = document.querySelector("#temperature-display");
  displayTemperature.innerHTML = `${temperature} ºC`;
  }
  
  function showLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  
    console.log(apiUrl);
    axios.get(apiUrl).then(showTemperature);
  }
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showLocation);
  }
  let button = document.querySelector("button");
      button.addEventListener("click", getCurrentPosition);
  
 
      /* let h3 = document.querySelector("#city-name");
      h3.innerHTML = `You are in ${latitude} ${longitude}`; */

 

/*     function sameTemperature(event){
        event.preventDefault();
        let clickCelsius = document.querySelector("#number");
        clickCelsius.innerHTML = "30";
    }

    let celsius = document.querySelector("#temperature-celsius");
    celsius.addEventListener("click", sameTemperature);

    function changeTemperature(event){
        event.preventDefault();
    let clickFahrenheit = document.querySelector("#number");
        clickFahrenheit.innerHTML = "86";
    }
    let fahrenheit = document.querySelector("#temperature-fahrenheit");
    fahrenheit.addEventListener("click", changeTemperature); */

    