import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/joy";
import { Unit } from "../../models/WeatherResponse";
import getTempUnit from "../../utils/getTempUnit";

interface CurrentTemperatureCardProps {
  weatherIconUrl: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  unit: Unit;
}

const CurrentTemperatureCard: React.FC<CurrentTemperatureCardProps> = ({
  weatherIconUrl,
  temp,
  maxTemp,
  minTemp,
  unit,
}) => {
  return (
    <Card
      sx={{
        marginTop: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
        <img src={weatherIconUrl}></img>
        <Typography level="h1" marginLeft={"0.5rem"}>
          {Math.round(temp)} {getTempUnit(unit)}
        </Typography>
      </Box>

      <Typography sx={{ color: "#F7822F" }}>
        H:{Math.round(maxTemp)} {getTempUnit(unit)} L:
        {Math.round(minTemp)} {getTempUnit(unit)}
      </Typography>
    </Card>
  );
};

export default CurrentTemperatureCard;
