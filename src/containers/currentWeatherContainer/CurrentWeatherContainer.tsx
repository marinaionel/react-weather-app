import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchCurrentWeather } from "../../store/currentWeather/currentWeatherSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Box, Card, CardContent, Grid, Typography } from "@mui/joy";
import AirIcon from "@mui/icons-material/Air";
import { Unit } from "../../models/WeatherResponse";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import CloudIcon from "@mui/icons-material/Cloud";
import CompressIcon from "@mui/icons-material/Compress";
import getTempUnit from "../../utils/getTempUnit";
import ForecastList from "../../components/forecastList/ForecastList";
import { fetchForecast } from "../../store/forecast/forecastSlice";
import dayjs from "dayjs";

const CurrentWeatherContainer: React.FC = () => {
  const query = useSelector((state: RootState) => state.search.query);
  const currentWeather = useSelector(
    (state: RootState) => state.currentWeather.currentWeather
  );
  const time = new Date();
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

  const getWindUnit = (unit: Unit) => {
    switch (unit) {
      case "imperial":
        return "miles/hour";
      case "metric":
      case "standard":
        return "meter/sec";
    }
  };

  const getWeatherIconSrc = (iconcode: string) => {
    return "http://openweathermap.org/img/w/" + iconcode + ".png";
  };

  return (
    <>
      <Card
        sx={{
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography level="h3">{query.description}</Typography>
          <Typography sx={{ color: "#5F667A" }}>
            {dayjs().tz(query.tz).format("LLLL")}
          </Typography>
        </CardContent>
      </Card>

      {currentWeather && (
        <>
          <Card
            sx={{
              marginTop: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
              <img
                src={getWeatherIconSrc(currentWeather.weather[0].icon)}
              ></img>
              <Typography level="h1" marginLeft={"0.5rem"}>
                {Math.round(currentWeather.main.temp)} {getTempUnit(unit)}
              </Typography>
            </Box>

            <Typography sx={{ color: "#F7822F" }}>
              H:{Math.round(currentWeather.main.temp_max)} {getTempUnit(unit)}{" "}
              L:
              {Math.round(currentWeather.main.temp_min)} {getTempUnit(unit)}
            </Typography>
          </Card>

          <Card
            sx={{
              marginTop: "16px",
            }}
          >
            <Grid container spacing={2}>
              <Grid xs={3}>
                <Box
                  flexDirection={"column"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <AirIcon
                    sx={{
                      fontSize: "50px",
                      marginBottom: "1rem",
                      color: "info",
                    }}
                  ></AirIcon>
                  <Typography>
                    {currentWeather.wind.speed} {getWindUnit(unit)}
                  </Typography>
                </Box>
              </Grid>

              <Grid xs={3}>
                <Box
                  flexDirection={"column"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <WaterDropIcon
                    sx={{ fontSize: "50px", marginBottom: "1rem" }}
                  ></WaterDropIcon>
                  <Typography>{currentWeather.main.humidity} %</Typography>
                </Box>
              </Grid>

              <Grid xs={3}>
                <Box
                  flexDirection={"column"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <CloudIcon
                    sx={{ fontSize: "50px", marginBottom: "1rem" }}
                  ></CloudIcon>
                  <Typography>{currentWeather.clouds.all} %</Typography>
                </Box>
              </Grid>

              <Grid xs={3}>
                <Box
                  flexDirection={"column"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <CompressIcon
                    sx={{ fontSize: "50px", marginBottom: "1rem" }}
                  ></CompressIcon>
                  <Typography>{currentWeather.main.pressure} hPa</Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>

          {forecast && (
            <Box sx={{ marginTop: "16px" }}>
              <Typography level="h3" sx={{ marginBottom: "8px" }}>
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
