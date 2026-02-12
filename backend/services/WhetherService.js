const axios = require('axios');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 300 }); // 5 minutes
const cities = require('../cities.json');


async function fetchWeatherData(cityCode) {
  const cacheKey = `weather_${cityCode}`;
  let data = cache.get(cacheKey);
  if (!data) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityCode}&appid=${API_KEY}`
    );
    data = response.data;
    cache.set(cacheKey, data);
  }
  return data;
}

// Debug endpoint to check cache status
function getCacheStatus(cityCode) {
  const cacheKey = `weather_${cityCode}`;
  return cache.has(cacheKey) ? 'From Cache' : 'Not Cached';
}