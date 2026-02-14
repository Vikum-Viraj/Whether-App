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

