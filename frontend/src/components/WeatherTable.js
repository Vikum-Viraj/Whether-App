import React from 'react';
import { getComfortColor, getRankBadgeColor } from '../utils/weatherUtils';

function WeatherTable({ weatherData }) {

  return (
    <div className="overflow-hidden rounded-2xl shadow-2xl border border-blue-100">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
              <th className="py-4 px-6 text-left text-sm font-semibold tracking-wide">Rank</th>
              <th className="py-4 px-6 text-left text-sm font-semibold tracking-wide">City</th>
              <th className="py-4 px-6 text-left text-sm font-semibold tracking-wide">Condition</th>
              <th className="py-4 px-6 text-center text-sm font-semibold tracking-wide">Temperature</th>
              <th className="py-4 px-6 text-center text-sm font-semibold tracking-wide">Humidity</th>
              <th className="py-4 px-6 text-center text-sm font-semibold tracking-wide">Comfort Index</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-100">
            {weatherData.map((city, idx) => (
              <tr
                key={city.cityCode || idx}
                className="hover:bg-blue-50/50 transition-colors duration-150 group"
              >
                {/* Rank */}
                <td className="py-4 px-6">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm ${getRankBadgeColor(city.rank)}`}>
                    #{city.rank}
                  </div>
                </td>

                {/* City with Icon */}
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-sm">
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
                      <div className="font-bold text-blue-900 text-base group-hover:text-blue-700 transition-colors">
                        {city.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {city.weather?.country || 'Unknown'}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Weather Condition */}
                <td className="py-4 px-6">
                  <div className="text-sm text-gray-700 capitalize font-medium">
                    {city.error ? (
                      <span className="text-red-500">Error fetching data</span>
                    ) : (
                      city.weather?.description || 'N/A'
                    )}
                  </div>
                </td>

                {/* Temperature */}
                <td className="py-4 px-6 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-2xl font-extrabold bg-gradient-to-br from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                      {city.error ? '--' : city.weather ? (city.weather.temp - 273.15).toFixed(1) : '--'}°
                    </span>
                    <span className="text-xs text-gray-400 font-medium">Celsius</span>
                  </div>
                </td>

                {/* Humidity */}
                <td className="py-4 px-6 text-center">
                  <div className="inline-flex items-center space-x-1 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="text-sm font-bold text-blue-900">
                      {city.error ? '--' : city.weather?.humidity || '--'}
                    </span>
                    <span className="text-xs text-gray-500">%</span>
                  </div>
                </td>

                {/* Comfort Index */}
                <td className="py-4 px-6 text-center">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border shadow-sm ${getComfortColor(city.comfortIndex)}`}>
                    {city.comfortIndex}/100
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeatherTable;