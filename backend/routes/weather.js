const express = require('express');
const router = express.Router();
const { getAllCitiesWeather, getAllCitiesWeatherWithCacheStatus } = require('../services/WhetherService');
const checkJwt = require('../middleware/jwt-middleware');

router.get('/weather', checkJwt, async (req, res) => {
  try {
    const results = await getAllCitiesWeather();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

//debug endpoint to show cache status for all cities
router.get('/weather/debug/cache', checkJwt, async (req, res) => {
  try {
    const results = await getAllCitiesWeatherWithCacheStatus();
    res.json(results.map(({ name, cityCode, cacheStatus }) => ({ name, cityCode, cacheStatus })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cache status' });
  }
});

module.exports = router;