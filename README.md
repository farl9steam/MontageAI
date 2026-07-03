# MontageAI - Weather Dashboard

A modern weather dashboard application that fetches real-time weather data from public APIs.

## Features

- 🌤️ Real-time weather data
- 🌍 Multi-location support
- 📱 Responsive design
- 🎨 Beautiful UI
- 🔄 Auto-refresh capability
- 📊 Weather forecasts

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **API**: Weather API (public endpoints)
- **Database**: (Optional) MongoDB/Firebase

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- API key from a weather service (OpenWeatherMap, WeatherAPI, etc.)

### Installation

```bash
git clone https://github.com/farl9steam/MontageAI.git
cd MontageAI
npm install
```

### Configuration

Create a `.env` file in the root directory:

```env
WEATHER_API_KEY=your_api_key_here
WEATHER_API_URL=https://api.openweathermap.org/data/2.5
PORT=3000
```

### Running the Application

```bash
# Development
npm run dev

# Production
npm start
```

The application will be available at `http://localhost:3000`

## API Endpoints

- `GET /api/weather?city=<city_name>` - Get weather for a specific city
- `GET /api/weather/coordinates?lat=<latitude>&lon=<longitude>` - Get weather by coordinates
- `GET /api/forecast?city=<city_name>` - Get weather forecast

## Project Structure

```
├── src/
│   ├── server.js
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── middleware/
├── public/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── tests/
├── .env.example
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please create a feature branch and submit a pull request.

## License

MIT License

## Support

For questions or issues, please open a GitHub issue.
