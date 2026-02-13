import api from './client';

/**
 * Fetch weather data for all cities
 */
export function fetchWeather() {
  return api.get('/weather');
}

/**
 * Fetch weather cache status for debugging
 */
export function fetchWeatherCacheStatus() {
  return api.get('/weather/debug/cache');
}

export default api;
