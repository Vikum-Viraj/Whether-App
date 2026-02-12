require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getAllCitiesWeather } = require('./services/WhetherService');

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