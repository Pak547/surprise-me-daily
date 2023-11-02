//Weather API
var temperature = document.querySelector(".temperature");
var summary = document.querySelector(".summary");
var loc = document.querySelector(".location");

var cityName = "London";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + WEATHER_KEY;

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
var eventIncr = 0;
// onclick ++ .then
// JSON.stringify to allow it to go back into the array button increment and decrement
// each time they click the button it changes the event

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
      //var name1 = data["_embedded"]["events"]["1"]["name"];
      //var name2 = data["_embedded"]["events"]["2"]["name"];
      let dateData = data["_embedded"]["events"]["0"]["dates"]["start"]["localDate"];
      // var date1 = data["_embedded"]["events"]["1"]["dates"]["start"]["localDate"];
      // var date2 = data["_embedded"]["events"]["2"]["dates"]["start"]["localDate"];
      let timeData = data["_embedded"]["events"]["0"]["dates"]["start"]["localTime"];
      // var time1 = data["_embedded"]["events"]["1"]["dates"]["start"]["localTime"];
      // var time2 = data["_embedded"]["events"]["2"]["dates"]["start"]["localTime"];
      let picData = data["_embedded"]["events"]["0"]["images"]["0"]

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
addEventListener.onclick("#left-arrow"); {
  eventIncr--;
  JSON.stringify(eventIncr)
}
addEventListener.onclick("#right-arrow"); {
  eventIncr++;
  JSON.stringify(eventIncr)
  // if string is true then convert to integer 
  // else if integer is true then proceed
  // JSON parse after button click to allow it to be changed again
  // if event anchor is < 0 return 0
  // if event incre is > 20 return 20
}