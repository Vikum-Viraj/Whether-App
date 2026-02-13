import { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherApi';

export function useWeatherData() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather()
      .then((res) => {
        setWeatherData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch weather data');
        setLoading(false);
      });
  }, []);

  return { weatherData, loading, error };
}
