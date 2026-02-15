import { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherApi';
import { useAuth0 } from '@auth0/auth0-react';

export function useWeatherData() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getAccessTokenSilently } = useAuth0();//get access token after user login

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently();
        const res = await fetchWeather(token);
        setWeatherData(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };
    fetchData();
  }, [getAccessTokenSilently]);

  return { weatherData, loading, error };
}
