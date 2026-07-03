// Weather Dashboard Application

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherContainer = document.getElementById('weatherContainer');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

// API Configuration
const API_BASE = 'http://localhost:3000/api';

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

// Handle Search
async function handleSearch() {
    const city = cityInput.value.trim();
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    await fetchWeather(city);
}

// Fetch Weather Data
async function fetchWeather(city) {
    try {
        showLoading(true);
        clearError();

        const response = await fetch(`${API_BASE}/weather?city=${encodeURIComponent(city)}`);
        if (!response.ok) throw new Error('City not found');

        const data = await response.json();
        displayWeather(data);
    } catch (err) {
        showError(err.message || 'Failed to fetch weather data');
    } finally {
        showLoading(false);
    }
}

// Display Weather
function displayWeather(data) {
    // This will be populated when the backend is connected
    console.log('Weather data:', data);
}

// UI Helper Functions
function showLoading(show) {
    loading.style.display = show ? 'block' : 'none';
}

function showError(message) {
    error.textContent = message;
    error.style.display = 'block';
}

function clearError() {
    error.style.display = 'none';
    error.textContent = '';
}

// Initialize on load
window.addEventListener('load', () => {
    console.log('Weather Dashboard loaded');
});
