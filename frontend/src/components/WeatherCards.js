import React from 'react';
import { getComfortColor, getRankBadgeColor } from '../utils/weatherUtils';

function WeatherCards({ weatherData }) {

    return (
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {weatherData.map((city, idx) => (
                <div
                    key={city.cityCode || idx}
                    className="group bg-gradient-to-br from-white to-blue-50/30 rounded-xl p-3 shadow-md hover:shadow-xl border border-blue-100/50 transition-all duration-300 hover:scale-[1.02] hover:border-blue-200"
                >
                    {/* Header - City Name and Rank */}
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex-1 min-w-0">
                            <h3 className="text-base font-bold text-blue-900 group-hover:text-blue-700 transition-colors truncate">
                                {city.name}
                            </h3>
                            <p className="text-xs text-gray-500 capitalize truncate">
                                {city.error ? 'Unable to fetch data' : city.weather?.description || 'No data available'}
                            </p>
                        </div>
                        <div className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold shadow-sm ${getRankBadgeColor(city.rank)}`}>
                            #{city.rank}
                        </div>
                    </div>

                    {/* Weather Icon and Temperature */}
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-blue-100/50 to-indigo-100/30 rounded-lg flex items-center justify-center shadow-inner">
                            {city.weather?.icon ? (
                                <img
                                    src={`http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`}
                                    alt={city.weather?.description || 'Weather'}
                                    className="w-10 h-10 object-contain drop-shadow-sm"
                                />
                            ) : (
                                <span className="text-xl">❓</span>
                            )}
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-extrabold bg-gradient-to-br from-blue-700 to-indigo-700 bg-clip-text text-transparent leading-none">
                                {city.error ? '--' : city.weather ? (city.weather.temp - 273.15).toFixed(1) : '--'}°
                            </div>
                            <div className="text-xs text-gray-400 font-medium">Celsius</div>
                        </div>
                    </div>

                    {/* Humidity and Comfort Index */}
                    <div className="flex items-center justify-between pt-2 border-t border-blue-100/50">
                        <div className="flex items-center space-x-1">
                            <span className="text-xs text-gray-500 font-medium">Humidity:</span>
                            <span className="text-sm font-bold text-blue-900">
                                {city.error ? '--' : city.weather?.humidity || '--'}%
                            </span>
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold border shadow-sm ${getComfortColor(city.comfortIndex)}`}>
                            {city.comfortIndex}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default WeatherCards;