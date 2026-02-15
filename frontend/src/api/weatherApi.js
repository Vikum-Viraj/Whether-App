import api from './client';

//fetch weather data for all cities
export function fetchWeather(token) {
  return api.get('/weather', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

//fetch weather cache status for debugging
export function fetchWeatherCacheStatus() {
  return api.get('/weather/debug/cache');
}

export default api;
