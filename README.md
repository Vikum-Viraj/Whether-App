# Weather Comfort App

A full-stack web application that ranks cities by weather comfort using a custom Comfort Index formula. Built with React frontend and Node.js backend.

##  Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Whether_App
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # config environment variables
   npm start  # Starts server on port 3000
   ```

3. **Frontend Setup** (in a new terminal)
   ```bash
   cd frontend
   npm install
   npm start  # Starts React app on port 3001
   ```

### Environment Variables

Create `.env` files in both backend and frontend directories:

**Backend `.env`:**
```
OPENWEATHER_API_KEY=your_api_key
OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5
PORT=3000
```

**Frontend `.env`:**
```
REACT_APP_AUTH0_DOMAIN=your_auth0_domain
REACT_APP_AUTH0_CLIENT_ID=your_auth0_client_id
```

## 🧮 Comfort Index Formula

The Comfort Index is a score from 0-100 that represents how comfortable the weather feels for humans.
It combines three key weather factors:

### Formula Components

**Temperature Score (50% weight):**
```
tempScore = 50 × (1 - |tempCelsius - 22| / 22)
```
- Ideal: 22°C (room temperature)
- Score decreases linearly as temperature moves away from 22°C
- Reaches 0 at 0°C and 44°C

**Humidity Score (30% weight):**
```
humidityScore = 30 × (1 - |humidity - 50| / 50)
```
- Ideal: 50% relative humidity
- Score decreases as humidity moves away from 50%
- Reaches 0 at 0% and 100% humidity

**Wind Speed Score (20% weight):**
```
windScore = 20 × (1 - |windSpeed - 2| / 10)
```
- Ideal: 2 m/s (gentle breeze)
- Score decreases as wind speed deviates from 2 m/s
- Reaches 0 at 12 m/s wind speed

**Final Score:**
```
totalScore = tempScore + humidityScore + windScore
comfortIndex = Math.max(0, Math.min(100, Math.round(totalScore)))
```

## ⚖️ Reasoning for Variable Weights

The weights reflect the relative impact each factor has on human comfort:

- **50% Temperature**: Most important factor - extreme temperatures make people uncomfortable regardless of other conditions
- **30% Humidity**: Significant impact - affects how comfort or discomfort based on the thickness of the air
- **20% Wind Speed**: As cooling effect but less important than above 2 facts

These weights are based on how temp deviates affects humans

##  Trade-offs Considered

### Formula Design Trade-offs

**Linear vs Non-linear Scoring:**
- Chose linear decay for simplicity and predictability
- Non-linear (exponential) could better reflect extreme discomfort but would be harder to understand

**Equal Ranges vs Adaptive Ranges:**
- Used fixed average ranges for consistency
- Fluctuating ranges could adjust based on season but would complicate the formula

### Technical Trade-offs

**Caching Strategy:**
- 5-minute cache reduces API calls but may show slightly stale data
- Real-time data would be more accurate but expensive and slower

**Data Sources:**
- Single weather API (OpenWeather) for reliability
- Multiple APIs could provide better accuracy but increase complexity


## 💾 Cache Design Explanation

The application uses a **5-minute in-memory cache** to optimize performance and reduce API costs:
But when the server restart cache is gone need advanced cache mechanism in prod.

### How It Works
1. **First Request**: Fetches fresh data from OpenWeather API, stores in cache
2. **Subsequent Requests**: Returns cached data if < 5 minutes old
3. **Cache Expiration**: Automatically removes old data after 5 minutes

### Cache Benefits
-  **Faster Response Times**: Cached data loads instantly
-  **Cost Effective**: Reduces API calls by ~80% during peak usage
-  **Automatic Updates**: Fresh data every 5 minutes
-  **Thread Safe**: Node-cache handles concurrent requests safely

### Cache Monitoring
Use the debug endpoint to monitor cache performance:
```
GET /api/weather/debug/cache
```
Returns cache hit/miss status for each city.

## ⚠️ Known Limitations

### Formula Limitations
- **Seasonal Bias**: Formula uses fixed ideals year-round (doesn't account for seasonal preferences)
- **Regional Differences**: Doesn't consider cultural comfort preferences (e.g., tropical vs. arctic climates)
- **Activity-Based**: General comfort formula doesn't account for specific activities (sports, indoor work, etc.)

### Technical Limitations
- **Weather API Dependency**: Single point of failure if OpenWeather API is down
- **City Coverage**: Limited to cities in the `cities.json` file
- **Cache Staleness**: 5-minute delay for weather updates during rapid changes
- **No Historical Data**: Only shows current weather conditions

### User Experience Limitations
- **Mobile Responsiveness**: Basic responsive design, could be enhanced for very small screens
- **Accessibility**: Basic implementation, could benefit from enhanced screen reader support
- **Offline Mode**: No offline functionality when internet connection is lost

---
