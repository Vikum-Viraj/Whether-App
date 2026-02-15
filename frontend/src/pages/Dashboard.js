import React, { useState, useMemo } from 'react';
import { useWeatherData } from '../hooks/useWeatherData';
import WeatherTable from '../components/WeatherTable';
import WeatherCards from '../components/WeatherCards';
import Pagination from '../components/Pagination';
import TemperatureGraph from '../components/Temperaturegraph';

const Dashboard = () => {

    const { weatherData, loading, error } = useWeatherData();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [currentTab, setCurrentTab] = useState('table');

    const [sortBy, setSortBy] = useState('comfortIndex');
    const [sortOrder, setSortOrder] = useState('desc')

    //calculate base on filters
    const sortedWeatherData = useMemo(() => {
        if (!weatherData) return [];
        return [...weatherData].sort((a, b) => {
            if (sortBy === 'comfortIndex') {
                return sortOrder === 'asc' ? a.comfortIndex - b.comfortIndex : b.comfortIndex - a.comfortIndex;
            } else if (sortBy === 'temperature') {
                return sortOrder === 'asc' ? a.weather.temp - b.weather.temp : b.weather.temp - a.weather.temp;
            }
            return 0;
        })
    }, [weatherData, sortBy, sortOrder])

    // calculate pagination data
    // usememo to cahce values if weatherData, currentPage or itemsPerPage do not change
    const paginationData = useMemo(() => {
        const totalItems = sortedWeatherData?.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentItems = sortedWeatherData?.slice(startIndex, endIndex);

        return {
            currentItems,
            totalItems,
            totalPages,
            startIndex,
            endIndex
        };
    }, [sortedWeatherData, currentPage, itemsPerPage]);

    //scroll top when page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    //handle sort change and reset to page
    const handleSortChange = (newSortBy, newSortOrder) => {
        setSortBy(newSortBy)
        setSortOrder(newSortOrder)
        setCurrentPage(1);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
            <main className="max-w-5xl mx-auto p-5 mt-2">
                <header className="mb-3">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center">City Comfort Rankings</h1>
                    <p className="text-center text-sm text-gray-600">
                        Ranked by custom Comfort Index
                    </p>
                </header>

                <div className='flex justify-center items-center gap-3 bg-white p-1 rounded-lg shadow-sm w-fit mx-auto'>
                    <button onClick={() => setCurrentTab('table')}
                        className={`px-3 py-2 rounded-md font-medium transition text-sm 
                        ${currentTab === 'table' ? 'bg-blue-500 text-white border' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >Comfort Rankings
                    </button>
                    <button onClick={() => setCurrentTab('graph')}
                        className={`px-3 py-2 rounded-md font-medium transition text-sm 
                        ${currentTab === 'graph' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >Temperature Trends
                    </button>
                </div>

                {currentTab === 'table' && (
                    <div className='flex flex-wrap mb-2 p-2.5 gap-5 mt-3 bg-blue-50 rounded-lg shadow-sm border border-blue-200'>
                        <div className='flex items-center gap-2'>
                            <label className='text-sm font-medium text-gray-700'>Sort By:</label>
                            <select value={sortBy}
                                onChange={(e) => handleSortChange(e.target.value, sortOrder)}
                                className='px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            >
                                <option value="comfortIndex">Comfort Index</option>
                                <option value="temperature">Temperature</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium text-gray-700">Order:</label>
                            <select
                                value={sortOrder}
                                onChange={(e) => handleSortChange(sortBy, e.target.value)}
                                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="desc">Highest First</option>
                                <option value="asc">Lowest First</option>
                            </select>
                        </div>
                    </div>
                )}
                {loading ? (
                    <div className="text-center text-lg text-blue-600 py-12">Loading weather data...</div>
                ) : error ? (
                    <div className="text-center text-red-600 py-12">{error}</div>
                ) : (
                    <section className="space-y-6">
                        {currentTab === 'table' ? (
                            <>
                                {/*desktop view */}
                                <div className="hidden md:block">
                                    <WeatherTable weatherData={paginationData.currentItems} />
                                    <div className='mt-1.5'>
                                        {paginationData.totalPages > 1 && (
                                            <Pagination
                                                currentPage={currentPage}
                                                totalPages={paginationData.totalPages}
                                                onPageChange={handlePageChange}
                                                itemsPerPage={itemsPerPage}
                                                totalItems={paginationData.totalItems}
                                            />
                                        )}
                                    </div>
                                </div>

                                {/*mobile view */}
                                <div className="md:hidden">
                                    <WeatherCards weatherData={paginationData.currentItems} />
                                    {paginationData.totalPages > 1 && (
                                        <div className="mt-5">
                                            <Pagination
                                                currentPage={currentPage}
                                                totalPages={paginationData.totalPages}
                                                onPageChange={handlePageChange}
                                                itemsPerPage={itemsPerPage}
                                                totalItems={paginationData.totalItems}
                                            />
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <TemperatureGraph weatherData={weatherData} />
                        )}
                    </section>
                )}
            </main>
        </div>
    );
};

export default Dashboard;