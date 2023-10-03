const apiKey = '423d75a5774f46b1af2418fee0d75c37';
const searchButton = document.getElementById('search');
const cityNameInput = document.getElementById('city');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const city = cityNameInput.value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                cityName.textContent = data.name;
                temperature.textContent = `${Math.round(data.main.temp)}°C`;
                description.textContent = data.weather[0].description;
                const iconCode = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
                weatherIcon.src = iconUrl;
            })
    .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('City not found. Please try again.');
            });
    }
});
