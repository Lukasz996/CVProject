async function getWeatherData() {
	const options = {
		method: 'GET',
		url: 'https://weatherapi-com.p.rapidapi.com/current.json',
		params: { q: '50.03,22.01' },
		headers: {
			'X-RapidAPI-Key': 'c99a16d497mshf66c429161eb852p153448jsn86aa207704d9',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		},
	}

	try {
		const response = await axios.request(options)
		displayWeatherInfo(response.data)
	} catch (error) {
		console.error(error)
		document.getElementById('weather-info').innerHTML = 'Failed to fetch weather data.'
	}
}

function displayWeatherInfo(weatherData) {
	const { location, current } = weatherData
	const weatherInfo = `
        <p>Location: ${location.name}, ${location.country}</p>
        <p>Temperature: ${current.temp_c}°C</p>
        <p>Condition: ${current.condition.text}</p>
        <p>Wind Speed: ${current.wind_kph} km/h</p>

    `
	document.getElementById('weather-info').innerHTML = weatherInfo
}

function refreshWeather() {
	console.log('Odświeżanie danych pogodowych...')
	getWeatherData()
}

// Pobierz dane pogodowe po załadowaniu strony
getWeatherData()

document.getElementById('refresh-button').addEventListener('click', refreshWeather)