
const APIkey = "dj0yJmk9cFdhUjlwQ0VwT04wJmQ9WVdrOVZIaFJabGRTZURVbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTYw"

const url = 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL,MSFT';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': APIkey,
		'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

