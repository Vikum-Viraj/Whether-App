import React from 'react';
import { getComfortColor, getRankBadgeColor } from '../utils/weatherUtils';

function WeatherCards({ weatherData }) {

    const kelvinToCelsius = (tempK) => {
        return (tempK - 273.15).toFixed(1);
    }

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {weatherData.map((city, idx) => (
                <div
                    key={city.cityCode}
                    className="group relative bg-blue-100 rounded-2xl p-5 shadow-lg hover:shadow-2xl 
                    border border-gray-100 transition-all duration-500 hover:-translate-y-1
                    overflow-hidden"
                >
                    
                    <div className="relative z-10">
                        {/* Header - City Name and Rank */}
                        <div className="flex items-start justify-between mb-5">
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xl font-bold text-gray-900 mb-1 truncate 
                                group-hover:text-blue-700 transition-colors">
                                    {city.name}
                                </h3>
                                <p className="text-sm text-gray-600 capitalize truncate flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                    {city.weather?.description || 'N/A'}
                                </p>
                            </div>
                            <div className={`ml-3 px-3 py-1.5 rounded-xl text-xs font-bold
                                shadow-md backdrop-blur-sm ${getRankBadgeColor(city.rank)}`}>
                                #{city.rank}
                            </div>
                        </div>

                        {/* Weather Icon and Temperature - Main Focus */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-blue-100 to-indigo-100
                            rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 
                            transition-transform duration-500">
                                {city.weather?.icon ? (
                                    <img
                                        src={`http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`}
                                        alt={city.weather?.description || 'Weather'}
                                        className="w-16 h-16 object-contain drop-shadow-lg"
                                    />
                                ) : (
                                    <span className="text-3xl">❓</span>
                                )}
                            </div>
                            <div className="text-right">
                                <div className="text-4xl font-black bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 
                                bg-clip-text text-transparent leading-none mb-1">
                                    {city.error ? '--' : city.weather ? kelvinToCelsius(city.weather.temp) : '--'}°
                                </div>
                                <div className="text-xs text-gray-500 font-semibold tracking-wider uppercase">
                                    Celsius
                                </div>
                            </div>
                        </div>

                        {/* humidity and Comfort Index */}
                        <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                    <span className="text-base">💧</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Humidity</p>
                                    <p className="text-base font-bold text-gray-900">
                                        {city.weather?.humidity || '--'}%
                                    </p>
                                </div>
                            </div>
                            <span className={`px-4 py-2 rounded-xl text-sm font-bold border-2
                                shadow-md backdrop-blur-sm transition-all duration-300 
                                group-hover:scale-105 ${getComfortColor(city.comfortIndex)}`}>
                                {city.comfortIndex}%
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WeatherCards;