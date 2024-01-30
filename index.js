// import axios from 'axios'

function updateTime() {
	let now = new Date()
	let hours = now.getHours()
	let minutes = now.getMinutes()
	let seconds = now.getSeconds()

	hours = hours < 10 ? '0' + hours : hours
	minutes = minutes < 10 ? '0' + minutes : minutes
	seconds = seconds < 10 ? '0' + seconds : seconds

	let timeString = hours + ':' + minutes + ':' + seconds
	document.getElementById('time').textContent = timeString
}
setInterval(updateTime, 1000)

// Inicjalne wywołanie funkcji, aby uniknąć opóźnienia w pierwszym odświeżeniu czasu
updateTime()

// ------------------------------------

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



// ----------------ProtoType-------DM---------

function switchMode() {
    let moon = document.getElementById ("moon");
    if(moon.className=="moon"){
    moon.className="sun";
    document.body.style.backgroundColor = "#141D26";
    document.body.style.color = "#fff";
    }
    else {
    moon.className ="moon";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    }
    }
