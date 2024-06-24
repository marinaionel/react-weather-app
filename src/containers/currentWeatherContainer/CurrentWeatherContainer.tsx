import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchCurrentWeather } from "../../store/currentWeather/currentWeatherSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Box, Typography } from "@mui/joy";
import ForecastList from "../../components/forecastList/ForecastList";
import { fetchForecast } from "../../store/forecast/forecastSlice";
import LocationCard from "../../components/locationCard/LocationCard";
import CurrentTemperatureCard from "../../components/currentTemperatureCard/CurrentTemperatureCard";
import WeatherIndicatorsCard from "../../components/weatherIndicatorsCard/WeatherIndicatorsCard";

const CurrentWeatherContainer: React.FC = () => {
  const query = useSelector((state: RootState) => state.search.query);
  const currentWeather = useSelector(
    (state: RootState) => state.currentWeather.currentWeather
  );
  const unit = useSelector((state: RootState) => state.search.unit);
  const forecast = useSelector((state: RootState) => state.forecast.forecast);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchCurrentWeather({
        lat: query.coordinates.lat,
        lon: query.coordinates.lng,
        units: unit,
      })
    );
    dispatch(
      fetchForecast({
        lat: query.coordinates.lat,
        lon: query.coordinates.lng,
        units: unit,
      })
    );
  }, [query, unit]);

  const getWeatherIconSrc = (iconcode: string) => {
    return "http://openweathermap.org/img/w/" + iconcode + ".png";
  };

  return (
    <>
      <LocationCard location={query.description} timezone={query.tz} />

      {currentWeather && (
        <>
          <CurrentTemperatureCard
            maxTemp={currentWeather.main.temp_max}
            minTemp={currentWeather.main.temp_min}
            temp={currentWeather.main.temp}
            unit={unit}
            weatherIconUrl={getWeatherIconSrc(currentWeather.weather[0].icon)}
          />

          <WeatherIndicatorsCard
            atmosphericPressure={currentWeather.main.pressure}
            cloudCoveragePercentage={currentWeather.clouds.all}
            humidityPercentage={currentWeather.main.humidity}
            unit={unit}
            windSpeed={currentWeather.wind.speed}
          />

          {forecast && (
            <Box sx={{ marginTop: "16px" }}>
              <Typography level="h4" sx={{ marginBottom: "8px" }}>
                Weather Forecast
              </Typography>
              <ForecastList unit={unit} forecastList={forecast.list} />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default CurrentWeatherContainer;
