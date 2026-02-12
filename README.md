# Comfort Index Formula Explanation

The Comfort Index Score is a custom metric designed to represent how comfortable the weather feels in a city. The score is a number from 0 (least comfortable) to 100 (most comfortable). It is calculated using three key weather parameters:

- **Temperature** (ideal: 22°C, weighted 50%)
- **Humidity** (ideal: 50%, weighted 30%)
- **Wind Speed** (ideal: 2 m/s, weighted 20%)

**Formula:**
- The closer the temperature is to 22°C, the higher the score.
- The closer the humidity is to 50%, the higher the score.
- The closer the wind speed is to 2 m/s, the higher the score.

Each parameter is normalized and weighted, then summed to produce a final score between 0 and 100. This formula was chosen because these three factors most directly affect human comfort in typical weather conditions.

---
