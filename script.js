const apiKey = "bad2585150121c9b32104915c6e8ce3f"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={"apiKey}"

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