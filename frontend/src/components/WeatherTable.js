import React from 'react';

function WeatherTable({ weatherData }) {
  return (
    <div className="overflow-x-auto">
      <div className="hidden md:block">
        <table className="min-w-full bg-white rounded-xl shadow-lg border border-blue-200">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <th className="py-3 px-4 text-lg">Rank</th>
              <th className="py-3 px-4 text-lg">City</th>
              <th className="py-3 px-4 text-lg">Weather</th>
              <th className="py-3 px-4 text-lg">Temp (°C)</th>
              <th className="py-3 px-4 text-lg">Comfort Score</th>
            </tr>
          </thead>
          <tbody>
            {weatherData.map((city, idx) => (
              <tr
                key={city.cityCode || idx}
                className={`border-b last:border-none ${idx % 2 === 0 ? 'bg-white' : 'bg-blue-50'} hover:bg-blue-100 transition`}
              >
                <td className="py-3 px-4 font-bold text-blue-700 text-center text-xl">{city.rank}</td>
                <td className="py-3 px-4 flex items-center space-x-3">
                  <img
                    src={city.weather?.icon ? `http://openweathermap.org/img/wn/${city.weather.icon}@2x.png` : ''}
                    alt="icon"
                    className="w-10 h-10 rounded-full border border-blue-300 shadow-sm"
                  />
                  <span className="font-semibold text-lg text-blue-900">{city.name}</span>
                </td>
                <td className="py-3 px-4 text-gray-700 capitalize text-base">
                  {city.error ? 'Error fetching data' : city.weather?.description || 'N/A'}
                </td>
                <td className="py-3 px-4 text-blue-800 text-lg font-medium">
                  {city.error ? 'N/A' : city.weather ? (city.weather.temp - 273.15).toFixed(1) : 'N/A'}
                </td>
                <td className="py-3 px-4 font-semibold text-green-700 text-center text-lg">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 border border-green-300 shadow-sm">
                    {city.comfortIndex || 'N/A'}
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
