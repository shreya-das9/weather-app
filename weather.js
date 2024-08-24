document.getElementById('search-btn').addEventListener('click', function() {
    // Get the city name from the input field
    const cityName = document.getElementById('city-input').value;

    // API key from OpenWeatherMap
    const apiKey = '3432b80763f7a9091ffb0ecf4053dd96';

    // URL for fetching weather data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    // Fetch the weather data  
    fetch(url)
        .then(response => {
            if (!response.ok) {
                console.log(response)
                console.error('Network response was not ok:', response.status, response.statusText);
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the data for debugging purposes

            // Extract temperature, pressure, and humidity
            const temperature = data.main.temp;
            const pressure = data.main.pressure;
            const humidity = data.main.humidity;

            // Display the data on the webpage
            document.getElementById('temperature').textContent = `Temperature: ${temperature} °C`;
            document.getElementById('pressure').textContent = `Atmospheric Pressure: ${pressure} hPa`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Could not retrieve weather data for the specified city.');
        });
});
