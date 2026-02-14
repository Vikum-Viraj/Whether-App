
// 50% temperature (avg 22°C), 
// 30% humidity (avg 50%),
// 20% wind speed (avg 2 m/s)

function computeComfortIndex(tempK, humidity, windSpeed) {
  const tempCelsius = tempK - 273.15;
  const tempScore = 50 * (1 - Math.abs(tempCelsius - 22)/22)
  const humidityScore = 30 * (1 - Math.abs(humidity - 50)/50)
  const windScore = 20 * (1 - Math.abs(windSpeed - 2)/10)
  let score = tempScore + humidityScore + windScore;
  score = Math.max(0,Math.min(100,score)); // clamp btw 0 - 100
  return Math.round(score);
}

module.exports = { computeComfortIndex };