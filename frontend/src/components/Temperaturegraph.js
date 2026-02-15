import {
    LineChart, Line, XAxis, YAxis,
    CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const TemperatureGraph = ({ weatherData }) => {

    const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

    const chartData = weatherData?.map(city => ({
        name: city.name,
        temperature: parseFloat(kelvinToCelsius(city.weather.temp)),
        humidity: city.weather.humidity,
        windSpeed: city.weather.windSpeed,
        comfortIndex: city.comfortIndex,
        fullName: city.name
    })) || [];

    //tooltip when hover over
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload) {
            const data = payload[0].payload;
            return (
                <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-blue-100">
                    <p className="font-bold text-gray-800 mb-2">{data.fullName}</p>
                    <div className="text-sm flex flex-col gap-1">
                        <span className="font-semibold text-blue-600">Temperature: {data.temperature}°C</span>
                        <span className="font-semibold text-cyan-600">Humidity: {data.humidity}%</span>
                        <span className="font-semibold text-green-600">Wind: {data.windSpeed} m/s</span>
                        <span className="font-semibold text-purple-600">Comfort: {data.comfortIndex}</span>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-blue-200 p-5 mt-5">
                <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Temperature Trends per City</h2>
                <ResponsiveContainer width="100%" height={370}>
                    <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" label={{ value: 'Cities', position: 'insideBottom', offset: -5, fontWeight: 'bold' }} />
                        <YAxis label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft', fontWeight: 'bold' }} />
                        <Tooltip content={<CustomTooltip />} />
                        <Line type="monotone" dataKey="temperature" stroke="#8884d8" strokeWidth={2} name="Temperature (°C)" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TemperatureGraph; 