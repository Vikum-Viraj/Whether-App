import React, { useState, useMemo } from 'react';
import { useWeatherData } from '../hooks/useWeatherData';
import WeatherTable from '../components/WeatherTable';
import WeatherCards from '../components/WeatherCards';
import Pagination from '../components/Pagination';

const Dashboard = () => {
    const { weatherData, loading, error } = useWeatherData();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    // calculate pagination data
    const paginationData = useMemo(() => {
        const totalItems = weatherData.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentItems = weatherData.slice(startIndex, endIndex);

        return {
            currentItems,
            totalItems,
            totalPages,
            startIndex,
            endIndex
        };
    }, [weatherData, currentPage, itemsPerPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
            <main className="max-w-5xl mx-auto p-6 mt-8">
                <header className="mb-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center">City Comfort Rankings</h1>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Ranked by custom Comfort Index (0–100) • Page {currentPage} of {paginationData.totalPages}
                    </p>
                </header>

                {loading ? (
                    <div className="text-center text-lg text-gray-600 py-12">Loading...</div>
                ) : error ? (
                    <div className="text-center text-red-600 py-12">{error}</div>
                ) : (
                    <section className="space-y-6">
                        {/* Desktop view */}
                        <div className="hidden md:block">
                            <WeatherTable weatherData={paginationData.currentItems} />
                            <div className='mt-2'>
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

                        {/* Mobile view */}
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
                    </section>
                )}
            </main>
        </div>
    );
};

export default Dashboard;