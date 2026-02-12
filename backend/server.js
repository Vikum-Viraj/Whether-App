require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getAllCitiesWeather, getAllCitiesWeatherWithCacheStatus } = require('./services/WhetherService');

const app = express();
app.use(cors());

//server up and running
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get('/api/weather', async (req, res) => {
  try {
    const results = await getAllCitiesWeather();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Debug endpoint to show cache status for all cities
app.get('/api/weather/debug/cache', async (req, res) => {
  try {
    const results = await getAllCitiesWeatherWithCacheStatus();
    res.json(results.map(({ name, cityCode, cacheStatus }) => ({ name, cityCode, cacheStatus })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cache status' });
  }
});