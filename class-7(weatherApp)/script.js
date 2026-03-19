// calling the api and fetching the weather data
async function fetchWeatherData(city = "pune") {
    const apiKey = `https://api.weatherapi.com/v1/current.json?key=bce16fecdad64a50a27182407262701&q=${city}&aqi=no`;

    const response = await fetch(apiKey);
    const data = await response.json();
    console.log(data);
    return data;
}

// Format date function
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// selecting dom elements
let inputbox = document.querySelector("#intbx");
let cityName = document.querySelector("#city-name");
let searchBtn = document.querySelector("#submit");
let temp = document.querySelector("#temp");
let dateElement = document.querySelector("#date");
let weatherCondition = document.querySelector("#wthr");
let weatherIcon = document.querySelector("#wicon");

// adding eventlistener and on click and fetching data from the api for the respected entered city
searchBtn.addEventListener("click", async function () {
    var value = inputbox.value;
    if (!value.trim()) {
        alert("Please enter a city name");
        return;
    }
    
    cityName.textContent = value;
    fetchWeatherData(value)
        .then(data => {
            //filtering and displaying the data together on the dom
            console.log(data);
            weatherCondition.textContent = data.current.condition.text;
            temp.textContent = data.current.temp_c;
            weatherIcon.setAttribute("src", data.current.condition.icon);
            dateElement.textContent = formatDate(data.current.last_updated);
            inputbox.value = "";
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Could not find city. Please try again.");
        });
});

// Allow Enter key to search
inputbox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});














//adding event listeners






