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
const tixKey = "wmaoc2ZzZXf8620JjoaSV5OEFlvJNJ84"
const tixUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey="+ tixKey

// function to retrieve data
async function getData() {
  try {
    const response = await fetch(tixUrl);
    console.log(response);
    // if theres an error then say not valid and show status
    if (!response.ok) throw new Error('not a valid response' + response.status);
    const data = await response.json();
    // variable events to grab the event param inside fetch
    const events = data._embedded.events
    console.log(data._embedded.events);
// catching the error
  } catch (error) {
    console.warn(error.message);
  }
}
// function to inject into html
