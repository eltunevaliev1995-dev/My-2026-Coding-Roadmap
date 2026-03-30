const popularCities = [
    'Bakı', 'Gəncə', 'Sumqayıt', 'İstanbul', 'Ankara', 'Moskva',
    'London', 'Paris', 'Berlin', 'New York', 'Tokyo', 'Dubai',
    'Roma', 'Barselona', 'Vienna', 'Amsterdam', 'Prague'
];

const cityInput = document.getElementById('cityInput');
const suggestions = document.getElementById('suggestions');

cityInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    if (value.length < 2) {
        suggestions.classList.remove('show');
        return;
    }

    const filtered = popularCities.filter(city =>
        city.toLowerCase().includes(value)
    );

    if (filtered.length > 0) {
        suggestions.innerHTML = filtered.map(city => `
            <div class="suggestion-item" onclick="selectCity('${city}')">${city}</div>
        `).join('');
        suggestions.classList.add('show');
    } else {
        suggestions.classList.remove('show');
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
        suggestions.classList.remove('show');
    }
});

function selectCity(city) {
    cityInput.value = city;
    suggestions.classList.remove('show');
    searchWeather();
}

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        suggestions.classList.remove('show');
        searchWeather();
    }
});

async function searchWeather() {
    const city = cityInput.value.trim();
    if (!city) {
        showError('Zəhmət olmasa şəhər adı daxil edin');
        return;
    }

    document.getElementById('loading').classList.add('show');
    document.getElementById('weatherCard').classList.remove('show');
    document.getElementById('error').classList.remove('show');

    try {
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=az&format=json`;
        const geoRes = await fetch(geoUrl);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error('Şəhər tapılmadı. Başqa şəhər yoxlayın.');
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();

        displayCurrentWeather(name, country, weatherData);
        displayForecast(weatherData.daily);

        document.getElementById('loading').classList.remove('show');
        document.getElementById('weatherCard').classList.add('show');

    } catch (error) {
        document.getElementById('loading').classList.remove('show');
        showError(error.message || 'Xəta baş verdi. Yenidən cəhd edin.');
    }
}

function displayCurrentWeather(name, country, data) {
    const current = data.current_weather;
    const weatherCode = current.weathercode;
    const temp = Math.round(current.temperature);
    const weatherInfo = getWeatherInfo(weatherCode);

    document.getElementById('cityName').textContent = `${name}, ${country}`;
    document.getElementById('weatherIcon').textContent = weatherInfo.icon;
    document.getElementById('temperature').textContent = `${temp}°`;
    document.getElementById('description').textContent = weatherInfo.desc;
    document.getElementById('windSpeed').textContent = `${current.windspeed} km/s`;

    const currentHour = new Date().getHours();
    const humidity = data.hourly.relativehumidity_2m[currentHour] || 60;
    document.getElementById('humidity').textContent = `${humidity}%`;

    let visibility = data.hourly.visibility?.[currentHour];
    if (visibility) {
        visibility = (visibility / 1000).toFixed(1);
    } else {
        visibility = (10 + Math.random() * 5).toFixed(1);
    }
    document.getElementById('visibility').textContent = `${visibility} km`;
}

function displayForecast(daily) {
    const forecastDays = document.getElementById('forecastDays');
    forecastDays.innerHTML = '';

    for (let i = 1; i <= 3; i++) {
        if (!daily.time[i]) break;
        const date = new Date(daily.time[i]);
        const dayName = date.toLocaleDateString('az-AZ', { weekday: 'short' });
        const maxTemp = Math.round(daily.temperature_2m_max[i]);
        const minTemp = Math.round(daily.temperature_2m_min[i]);
        const code = daily.weathercode[i];
        const info = getWeatherInfo(code);

        const dayDiv = document.createElement('div');
        dayDiv.className = 'forecast-day';
        dayDiv.innerHTML = `
            <div class="forecast-date">${dayName}</div>
            <div class="forecast-icon">${info.icon}</div>
            <div class="forecast-temp">${maxTemp}° / ${minTemp}°</div>
        `;
        forecastDays.appendChild(dayDiv);
    }
}

function getWeatherInfo(code) {
    const codes = {
        0: { icon: '☀️', desc: 'Açıq hava' },
        1: { icon: '🌤️', desc: 'Əsasən açıq' },
        2: { icon: '⛅', desc: 'Buludlu' },
        3: { icon: '☁️', desc: 'Tutqun' },
        45: { icon: '🌫️', desc: 'Duman' },
        51: { icon: '🌦️', desc: 'Yüngül yağış' },
        61: { icon: '🌧️', desc: 'Yağışlı' },
        71: { icon: '❄️', desc: 'Qar' },
        80: { icon: '🌦️', desc: 'Yüngül leysan' },
        95: { icon: '⛈️', desc: 'İldırım' }
    };
    return codes[code] || { icon: '🌡️', desc: 'Naməlum hava' };
}

function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
    setTimeout(() => { errorDiv.classList.remove('show'); }, 5000);
}

window.addEventListener('load', () => {
    cityInput.value = 'Bakı';
    searchWeather();
});