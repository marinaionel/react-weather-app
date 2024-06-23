import React, { useEffect } from "react";
import { Box } from "@mui/joy";
import ForecastItem from "../forecastItem/ForecastItem";
import { Forecast } from "../../models/ThreeHourResponse";
import { Unit } from "../../models/WeatherResponse";

interface ForecastListProps {
  forecastList: Forecast[];
  unit: Unit;
}

const ForecastList: React.FC<ForecastListProps> = ({ forecastList, unit }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          overflowX: "scroll",
          gap: 2,
        }}
      >
        {forecastList.map((item, i) => (
          <ForecastItem data={item} unit={unit} />
        ))}
      </Box>
    </>
  );
};

export default ForecastList;
