import React from "react";
import { Box, Card, Grid, Typography } from "@mui/joy";
import AirIcon from "@mui/icons-material/Air";
import { Unit } from "../../models/WeatherResponse";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import CloudIcon from "@mui/icons-material/Cloud";
import CompressIcon from "@mui/icons-material/Compress";

interface WeatherIndicatorsCardProps {
  windSpeed: number;
  humidityPercentage: number;
  cloudCoveragePercentage: number;
  atmosphericPressure: number;
  unit: Unit;
}

const WeatherIndicatorsCard: React.FC<WeatherIndicatorsCardProps> = ({
  windSpeed,
  unit,
  humidityPercentage,
  cloudCoveragePercentage,
  atmosphericPressure,
}) => {
  const getWindUnit = (unit: Unit) => {
    switch (unit) {
      case "imperial":
        return "miles/hour";
      case "metric":
      case "standard":
        return "meter/sec";
    }
  };

  return (
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
              {windSpeed} {getWindUnit(unit)}
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
            <Typography>{humidityPercentage} %</Typography>
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
            <Typography>{cloudCoveragePercentage} %</Typography>
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
            <Typography>{atmosphericPressure} hPa</Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default WeatherIndicatorsCard;
