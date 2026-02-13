import React from 'react';
import { useWeatherData } from '../hooks/useWeatherData';
import WeatherTable from '../components/WeatherTable';
import WeatherCards from '../components/WeatherCards';

const Dashboard = () => {
    const { weatherData, loading, error } = useWeatherData();
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
            <main className="max-w-5xl mx-auto p-6 mt-8">
                <header className="mb-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center">City Comfort Rankings</h1>
                    <p className="mt-2 text-center text-sm text-gray-600">Ranked by custom Comfort Index (0–100)</p>
                </header>

                {loading ? (
                    <div className="text-center text-lg text-gray-600 py-12">Loading...</div>
                ) : error ? (
                    <div className="text-center text-red-600 py-12">{error}</div>
                ) : (
                    <section className="space-y-6">
                        {/* Desktop view */}
                        <div className="hidden md:block">
                            <WeatherTable weatherData={weatherData} />
                        </div>

                        {/* Mobile view */}
                        <div className="md:hidden">
                            <WeatherCards weatherData={weatherData} />
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default Dashboard;