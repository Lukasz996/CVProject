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
	console.log('Refreshing weather data...')

	const refreshButton = document.getElementById('refresh-button')

	// Zamiast nazwy tekstowej w przycisku, ustawimy komunikat o aktualizacji
	refreshButton.textContent = 'Updating...'

	// Po 2 sekundach przywróć pierwotny tekst przycisku
	setTimeout(() => {
		console.log('Resetting button text...')

		refreshButton.textContent = 'Refresh Weather'
	}, 1000)

	getWeatherData()
}

// Pobierz dane pogodowe po załadowaniu strony
getWeatherData()

document.getElementById('refresh-button').addEventListener('click', refreshWeather)
