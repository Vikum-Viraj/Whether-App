import React from 'react';

function WeatherCards({ weatherData }) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {weatherData.map((city, idx) => (
        <div
          key={city.cityCode || idx}
          className="bg-white rounded-2xl p-4 shadow-lg border border-blue-50 flex items-center space-x-4"
        >
          <div className="flex-shrink-0">
            <img
              src={city.weather?.icon ? `http://openweathermap.org/img/wn/${city.weather.icon}@2x.png` : ''}
              alt={city.error ? 'Error' : city.weather?.description || 'Weather icon'}
              className="w-16 h-16"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-blue-900">{city.name}</div>
                <div className="text-sm text-gray-500 capitalize">
                  {city.error ? 'Error fetching data' : city.weather?.description || 'N/A'}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-blue-800">
                  {city.error ? 'N/A' : city.weather ? (city.weather.temp - 273.15).toFixed(1) : 'N/A'}°C
                </div>
                <div className="text-sm text-gray-500">Rank #{city.rank || idx + 1}</div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="inline-flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 font-semibold border border-green-200">
                  {city.comfortIndex || 'N/A'}
                </span>
                <span className="text-sm text-gray-500">Comfort</span>
              </div>
              <div className="text-sm text-gray-400">
                Humidity: {city.error ? 'N/A' : city.weather?.humidity || 'N/A'}%
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherCards;
