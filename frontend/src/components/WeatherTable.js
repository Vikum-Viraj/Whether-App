import React from 'react';
import { getComfortColor, getRankBadgeColor } from '../utils/weatherUtils';

function WeatherTable({ weatherData }) {

  const kelvinToCelsius = (tempK) => {
    return (tempK - 273.15).toFixed(1);
  }

  return (
    <div className="space-y-2">

      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white 
      rounded-xl shadow-lg px-6 py-3">
        <div className="grid grid-cols-6 gap-4">
          <div className="text-left text-sm font-semibold tracking-wide">Rank</div>
          <div className="text-left text-sm font-semibold tracking-wide">City</div>
          <div className="text-left text-sm font-semibold tracking-wide">Condition</div>
          <div className="text-center text-sm font-semibold tracking-wide">Temperature</div>
          <div className="text-center text-sm font-semibold tracking-wide">Humidity</div>
          <div className="text-center text-sm font-semibold tracking-wide">Comfort Index</div>
        </div>
      </div>

      <div className="space-y-1">
        {weatherData.map((city, index) => (
          <div
            key={city.cityCode}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
            hover:scale-[1.02] hover:-translate-y-1 px-6 py-2 border border-blue-100 animate-fadeIn"
            style={{
              animationDelay: `${index * 50}ms`,
              animationFillMode: 'both'
            }}
          >
            <div className="grid grid-cols-6 gap-4 items-center">
              <div>
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full 
                  font-bold text-sm ${getRankBadgeColor(city.rank)}`}>
                  #{city.rank}
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-blue-100 to-indigo-100 
                                rounded-xl flex items-center justify-center shadow-sm">
                    {city.weather?.icon ? (
                      <img
                        src={`http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`}
                        alt={city.weather?.description || 'Weather'}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <span className="text-xl">❓</span>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-blue-900 text-base">
                      {city.name}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-700 capitalize font-medium">
                  {city.error ? (
                    <span className="text-red-500">Error fetching data</span>
                  ) : (
                    city.weather?.description || 'N/A'
                  )}
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex flex-col items-center">
                  <span className="text-2xl font-extrabold bg-gradient-to-br from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                    {city.error ? '--' : kelvinToCelsius(city.weather.temp)}°
                  </span>
                  <span className="text-xs text-gray-400 font-medium">Celsius</span>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center space-x-1 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-sm font-bold text-blue-900">
                    {city.error ? '--' : city.weather?.humidity || '--'}
                  </span>
                  <span className="text-xs text-gray-500">%</span>
                </div>
              </div>

              <div className="text-center">
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm 
                  font-bold border shadow-sm ${getComfortColor(city.comfortIndex)}`}>
                  {city.comfortIndex}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherTable;