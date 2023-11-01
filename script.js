/*
const weatherKey = "bad2585150121c9b32104915c6e8ce3f"
let cityName = "";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&units=imperial&appid=" + weatherKey
async function getWeather() {
	try {
		let response = await fetch(weatherUrl)
		console.log(response);
		if (!response.ok) throw new Error("not a valid response");
		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.warn(error.message);
	}
}
*/

// Tasnim code above here


let tixCity = "Riverside";
const tixKey = "wmaoc2ZzZXf8620JjoaSV5OEFlvJNJ84"
const tixUrl = "https://app.ticketmaster.com/discovery/v2/events.json?city="+tixCity+"&apikey="+ tixKey
// function to retrieve data
async function getData() {
  try {
    const response = await fetch(tixUrl);
    // if theres an error then say not valid and show status
    if (response.ok);{
    var data = await response.json();
    // variable events to grab the event param inside fetch
    // bracket notation with Richard's help to call data
    var eachEvent = data["_embedded"]["events"];
    var eventData = data["_embedded"]["events"]["0"]["name"];
    //var name1 = data["_embedded"]["events"]["1"]["name"];
    //var name2 = data["_embedded"]["events"]["2"]["name"];
    var dateData = data["_embedded"]["events"]["0"]["dates"]["start"]["localDate"];
   // var date1 = data["_embedded"]["events"]["1"]["dates"]["start"]["localDate"];
   // var date2 = data["_embedded"]["events"]["2"]["dates"]["start"]["localDate"];
    var timeData = data["_embedded"]["events"]["0"]["dates"]["start"]["localTime"];
   // var time1 = data["_embedded"]["events"]["1"]["dates"]["start"]["localTime"];
   // var time2 = data["_embedded"]["events"]["2"]["dates"]["start"]["localTime"];

    console.log(eachEvent);
    console.log(eventData);
    console.log(dateData);
    console.log(timeData);    

    const eventContainer = document.getElementById('showEvents');

// based on the api array we might have to create a for loop for each event, name, date, 0-6
// cant access values using only events because each page is a integer for example data._embedded.events.0.names
// so we need to identify the integer in a for loop to be able to use it... index of I failed will try more options

// loop to plug 6 events into the HTML

    for (let i=0; i<6; i++){
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
