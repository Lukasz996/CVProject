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

// Uruchamianie funkcji updateTime co sekundę
setInterval(updateTime, 1000)

// Inicjalne wywołanie funkcji, aby uniknąć opóźnienia w pierwszym odświeżeniu czasu
updateTime()
