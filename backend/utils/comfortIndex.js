// Comfort Index formula (0-100):
// 50% temperature (ideal 22°C), 30% humidity (ideal 50%), 20% wind speed (ideal 2 m/s)
function computeComfortIndex(tempK, humidity, windSpeed) {
  const tempC = tempK - 273.15;
  const tempScore = 50 * (1 - Math.abs(tempC - 22) / 22); // 0 at 0°C or 44°C, 1 at 22°C
  const humidityScore = 30 * (1 - Math.abs(humidity - 50) / 50); // 0 at 0% or 100%, 1 at 50%
  const windScore = 20 * (1 - Math.abs(windSpeed - 2) / 10); // 0 at 12 m/s, 1 at 2 m/s
  let score = tempScore + humidityScore + windScore;
  score = Math.max(0, Math.min(100, score));
  return Math.round(score);
}

module.exports = { computeComfortIndex };