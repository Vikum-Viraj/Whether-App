const axios = require('axios');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 300 }); // 5 minutes
const cities = require('../cities.json');
const { computeComfortIndex } = require('../utils/comfortIndex');

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const OPENWEATHER_BASE_URL = process.env.OPENWEATHER_BASE_URL

async function fetchWeatherData(cityCode) {
  const cacheKey = `weather_${cityCode}`;
  let data = cache.get(cacheKey);
  if (!data) {
    const response = await axios.get(
      `${OPENWEATHER_BASE_URL}/weather?id=${cityCode}&appid=${OPENWEATHER_API_KEY}`
    );
    data = response.data;
    cache.set(cacheKey, data);
  }
  return data;
}

async function getAllCitiesWeather() {
  let results = [];
  for (const city of cities) {
    try {
      const data = await fetchWeatherData(city.CityCode);
      const { temp, humidity } = data.main;
      const windSpeed = data.wind.speed;
      const comfortIndex = computeComfortIndex(temp, humidity, windSpeed);
      results.push({
        name: city.name,
        cityCode: city.CityCode,
        weather: {
          temp,
          humidity,
          windSpeed,
          description: data.weather[0].description,
          icon: data.weather[0].icon
        },
        comfortIndex
      });
    } catch (err) {
      results.push({ name: city.name, error: 'Failed to fetch' });
    }
  }
  // sort by comfortIndex descending
  results.sort((a, b) => b.comfortIndex - a.comfortIndex);
  results = results.map((item, idx) => ({ ...item, rank: idx + 1 }));
  return results;
}

// Debug endpoint to check cache status
function getCacheStatus(cityCode) {
  const cacheKey = `weather_${cityCode}`;
  return cache.has(cacheKey) ? 'Hit' : 'Miss';
}

async function getAllCitiesWeatherWithCacheStatus() {
  let results = [];
  for (const city of cities) {
    try {
      const status = getCacheStatus(city.CityCode);
      const data = await fetchWeatherData(city.CityCode);
      const { temp, humidity } = data.main;
      const windSpeed = data.wind.speed;
      const comfortIndex = computeComfortIndex(temp, humidity, windSpeed);
      results.push({
        name: city.name,
        cityCode: city.CityCode,
        weather: {
          temp,
          humidity,
          windSpeed,
          description: data.weather[0].description,
          icon: data.weather[0].icon
        },
        comfortIndex,
        cacheStatus: status
      });
    } catch (err) {
      results.push({ name: city.name, error: 'Failed to fetch', cacheStatus: 'Miss' });
    }
  }
  results.sort((a, b) => b.comfortIndex - a.comfortIndex);
  results = results.map((item, idx) => ({ ...item, rank: idx + 1 }));
  return results;
}

module.exports = { getAllCitiesWeather, getAllCitiesWeatherWithCacheStatus, getCacheStatus };
