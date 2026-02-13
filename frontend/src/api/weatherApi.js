import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
});

export function fetchWeather() {
  return api.get('/weather');
}

export function fetchWeatherCacheStatus() {
  return api.get('/weather/debug/cache');
}

export default api;
