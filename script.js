const apiKey = "bad2585150121c9b32104915c6e8ce3f"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}"

async function getWeather() {
	try {
		let response = await fetch(apiUrl)
		console.log(response);
		if (!response.ok) throw new Error("not a valid response");
		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.warn(error.message);
	}
}


// Tasnim code above here

const APIkey = "wmaoc2ZzZXf8620JjoaSV5OEFlvJNJ84"
const url = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey="+ APIkey

async function getData() {
  try {
    let response = await fetch(url);
    console.log(response);
    if (!response.ok) throw new Error('not a valid response');
    let dataobj = await response.json();
    console.log(dataobj);
  } catch (error) {
    console.warn(error.message);
  }
}
