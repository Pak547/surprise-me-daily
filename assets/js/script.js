//Weather API
var temperature = document.querySelector(".temperature");
var summary = document.querySelector(".summary");
var loc = document.querySelector(".location");

var cityName = "London";
const weatherKey = "bad2585150121c9b32104915c6e8ce3f"; // not best practice
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + weatherKey;

function handleWeatherResponse(data){
  console.log(data);
  temperature.textContent = Math.floor(data.main.temp) + "°F";
  summary.textContent = data.weather[0].description;
  loc.textContent = data.name + "," + data.sys.country;
  document.querySelector("#current-weather").setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
} 

fetch(weatherUrl)
  .then(function(response){
    return response.json();
  })
  .then(handleWeatherResponse);

// psuedo code
// Tasnim code above here


let tixCity = "Riverside";
const tixKey = "wmaoc2ZzZXf8620JjoaSV5OEFlvJNJ84"
const tixUrl = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + tixCity + "&apikey=" + tixKey
// empty string populate into userInput 
var eventIncr = "0";
var leftArrowBtn = document.querySelector("#left-arrow");
var rightArrowBtn = document.querySelector("#right-arrow")
// onclick ++ .then
// JSON.stringify to allow it to go back into the array button increment and decrement
// each time they click the button it changes the event

const leftIncr = function minusMinus(eventIncr) 
{
  if(eventIncr === String){
    JSON.parse(eventIncr);
  } else {eventIncr--}
  return(eventIncr);
}

leftArrowBtn.addEventListener('click', leftIncr)

const rightIncr = function plusPlus(eventIncr) {
  if(eventIncr === String){
    JSON.parse(eventIncr);
  } else {eventIncr++}
  while (eventIncr === Number){
    // While this statement is true... 
    // convert to String
  }
  console.log(eventIncr)
  return(typeof eventIncr);
}

rightArrowBtn.addEventListener('click', rightIncr)

// if string is true then convert to integer 
  // else if integer is true then proceed
  // JSON parse after button click to allow it to be changed again
  // if event anchor is < 0 return 0
  // if event incre is > 20 return 20
// function to retrieve data
async function getData() {
  try {
    const response = await fetch(tixUrl);
    // if theres an error then say not valid and show status
    if (response.ok) {
      let data = await response.json();
      // variable events to grab the event param inside fetch
      // bracket notation with Richard's help to call data
      let eachEvent = data["_embedded"]["events"];
      let eventData = data["_embedded"]["events"][eventIncr]["name"];
      let dateData = data["_embedded"]["events"][eventIncr]["dates"]["start"]["localDate"];
      let timeData = data["_embedded"]["events"][eventIncr]["dates"]["start"]["localTime"];
      let picData = data["_embedded"]["events"][eventIncr]["images"]["0"]

      console.log(eachEvent);
      console.log(eventData);
      console.log(dateData);
      console.log(timeData);
      console.log(picData);

      const eventContainer = document.getElementById('showEvents');

      // based on the api array we might have to create a for loop for each event, name, date, 0-6
      // cant access values using only events because each page is a integer for example data._embedded.events.0.names
      // so we need to identify the integer in a for loop to be able to use it... index of I failed will try more options

      // loop to plug 6 events into the HTML

      for (let i = 0; i < 1; i++) {
        const eventElement = document.createElement('div');
        eventElement.className = 'event';
        // shows title
        const eventTitle = document.createElement('h2');
        eventTitle.textContent = eventData
        //shows date in YYYY-MM-DD
        const eventDate = document.createElement('p');
        eventDate.textContent = dateData
        // shows time in military
        const eventTime = document.createElement('p');
        eventTime.textContent = timeData

        eventElement.appendChild(eventTitle);
        eventElement.appendChild(eventDate);
        eventElement.appendChild(eventTime);

        eventContainer.appendChild(eventElement);
      }
    }
    // catching the error
  } catch (error) {
    console.warn(error.message);
  }
}
