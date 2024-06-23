const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export async function fetchWeatherData(
  lat: number,
  lon: number,
  units: string = "metric"
) {
  try {
    let [weatherPromise, forecastPromise] = await Promise.all([
      fetch(
        `${WEATHER_API_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${units}`
      ),
      fetch(
        `${WEATHER_API_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${units}`
      ),
    ]);

    const weatherResponse = await weatherPromise.json();
    const forecastResponse = await forecastPromise.json();
    return [weatherResponse, forecastResponse];
  } catch (error) {
    console.error(error);
  }
}
