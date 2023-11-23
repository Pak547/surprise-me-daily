const searchInput = document.querySelector(".search")
const searchButton = document.querySelector(".start-btn")
const temperature = document.querySelector(".temperature");
const summary = document.querySelector(".summary");
const loc = document.querySelector(".location");

let cityName = "";
const weatherKey = "bad2585150121c9b32104915c6e8ce3f"; 

function handleWeatherResponse(data) {
  temperature.textContent = "Temperature: " + Math.floor(data.main.temp) + "°F";
  summary.textContent = "Weather Condition " + data.weather[0].description;
  loc.textContent = data.name + ", " + data.sys.country;
  document.querySelector("#current-weather").setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
}

function searchWeather(cityName) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${weatherKey}`)
  .then(function (response) {
    return response.json();
  })
  .then(handleWeatherResponse);
}

const TIX_KEY = "wmaoc2ZzZXf8620JjoaSV5OEFlvJNJ84" // not best practice
const TIX_BASE_PATH = `https://app.ticketmaster.com/discovery/v2/events.json`;

searchButton.addEventListener("click", function (event) {
  event.preventDefault()
  cityName = searchInput.value.trim()
  console.log("cityName : " + cityName)
  searchWeather(cityName)
  console.log("getting ticket data")
  getData(cityName)
  localStorage.setItem("Saved Cities", JSON.stringify(cityName));
  localStorage.setItem("Saved Events", JSON.stringify(eventList));
}
)

let eventList = [];
let eventIncr = 0;
const leftArrowBtn = document.querySelector("#left-arrow");
const rightArrowBtn = document.querySelector("#right-arrow");

const leftIncr = function minusMinus() {
  if (eventIncr > 0) {
    eventIncr--;
    console.log(eventIncr);
    getData();
  } else {
    eventIncr = 0
    console.log(eventIncr);
  }
}
leftArrowBtn.addEventListener('click', leftIncr)

const rightIncr = function plusPlus() {
  // creating a limit
  if (eventIncr < 19) {
    eventIncr++;
    console.log(eventIncr);
    getData();
  } else {
    eventIncr = 19
    console.log(eventIncr);
  }

}
rightArrowBtn.addEventListener('click', rightIncr)

async function getData() {
  try {
    const tixUrl = TIX_BASE_PATH + `?city=${cityName}&apikey=${TIX_KEY}`
    console.log("tixurl data", tixUrl)
    const response = await fetch(tixUrl);
    if (response.ok) {
      console.log("if response ok")
      const data = await response.json();
      eventList = data._embedded.events;
      showData(eventList);
    }
  } catch (error) {
    console.warn(error.message);
  }
}

function showData(eventList) {
  console.log("event list", eventList)
  const eventData = eventList[eventIncr].name
  const dateData = eventList[eventIncr].dates.start.localDate
  const timeData = eventList[eventIncr].dates.start.localTime
  const picData = eventList[eventIncr].images[0].url
  const linkData = eventList[eventIncr].url
  const eventContainer = document.getElementById('showEvents');
  eventContainer.innerHTML = "";
  const eventElement = document.createElement('div');
  eventElement.className = 'event';
  const eventPic = document.createElement('img');
  eventPic.src = picData
  eventPic.className = 'innerImg'
  const eventTitle = document.createElement('h2');
  eventTitle.textContent = eventData
  const eventLink = document.createElement('a');
  eventLink.href = linkData
  eventLink.className = 'innerAnchor'
  eventLink.textContent = eventLink.href
  const eventDate = document.createElement('p');
  eventDate.textContent = dateData
  const eventTime = document.createElement('p');
  eventTime.textContent = timeData
  eventElement.appendChild(eventPic);
  eventElement.appendChild(eventTitle);
  eventElement.appendChild(eventLink);
  eventElement.appendChild(eventDate);
  eventElement.appendChild(eventTime);
  eventContainer.appendChild(eventElement);
}
