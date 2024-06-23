# React Weather App

The React Weather App is a React application that displays current weather conditions and a 5-day weather forecast for various locations using the OpenWeather API. The app integrates Mapbox for an interactive map experience, allowing users to click on pins to view weather details. It also supports metric, imperial, and standard units for temperature and other weather metrics. Redux is used for state management, and Jest is used for testing.

![image](https://github.com/marinaionel/react-weather-app/assets/19744901/17abf901-edef-467c-9000-1f16bf66aadd)

## Features

- **Map View**: View locations on a Mapbox map.
- **Weather Details**: Click on a pin or select from the dropdown to see the current weather and 5-day forecast for that location.
- **Unit Selection**: Choose between metric, imperial, and standard units.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/marinaionel/react-weather-app.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and add your Mapbox and OpenWeather API keys:

```
REACT_APP_MAPBOX_API_KEY=your_mapbox_token
REACT_APP_OPEN_WEATHER_API_KEY=your_openweather_api_key
REACT_APP_WEATHER_API_BASE_URL=https://api.openweathermap.org/data/2.5
```

### Running the App

Start the development server:

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000`.

### Testing

Run tests with Jest:

```bash
npm test
```

## Technologies Used

- React
- Redux
- MUI
- dayjs
- Jest
- [Mapbox](https://www.mapbox.com/)
- [OpenWeather](https://openweathermap.org/)
