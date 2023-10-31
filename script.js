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


// Tasnim code above here
const content = document.querySelector(".showEvents");
const tixKey = "wmaoc2ZzZXf8620JjoaSV5OEFlvJNJ84"
const tixUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey="+ tixKey

async function getData() {
  try {
    let response = await fetch(tixUrl);
    console.log(response);

    response.events.textContent(content);
    if (!response.ok) throw new Error('not a valid response');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.warn(error.message);
  }
}




