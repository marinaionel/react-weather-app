import { CurrentWeatherResponse } from "../models/CurrentWeatherResponse";
import { Unit } from "../models/WeatherResponse";

const WEATHER_API_BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;
const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export async function fetchCurrentWeather(
  lat: number,
  lon: number,
  units: Unit = "metric"
): Promise<CurrentWeatherResponse> {
  try {
    const weatherResponse = await fetch(
      `${WEATHER_API_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${units}`
    );
    const weatherData =
      (await weatherResponse.json()) as CurrentWeatherResponse;
    return weatherData;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
}

export async function fetchWeatherForecast(
  lat: number,
  lon: number,
  units: Unit = "metric"
) {
  try {
    const forecastResponse = await fetch(
      `${WEATHER_API_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${units}`
    );
    const forecastData = await forecastResponse.json();
    return forecastData;
  } catch (error) {
    console.error("Error fetching weather forecast:", error);
    throw error;
  }
}
