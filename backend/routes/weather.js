const express = require('express');
const router = express.Router();
const { getAllCitiesWeather, getAllCitiesWeatherWithCacheStatus } = require('../services/WhetherService');

router.get('/weather', async (req, res) => {
  try {
    const results = await getAllCitiesWeather();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Debug endpoint to show cache status for all cities
router.get('/weather/debug/cache', async (req, res) => {
  try {
    const results = await getAllCitiesWeatherWithCacheStatus();
    res.json(results.map(({ name, cityCode, cacheStatus }) => ({ name, cityCode, cacheStatus })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cache status' });
  }
});

module.exports = router;