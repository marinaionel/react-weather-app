import { Box, Card, CardContent, Typography } from "@mui/joy";
import { Forecast } from "../../models/ThreeHourResponse";
import getTempUnit from "../../utils/getTempUnit";
import { Unit } from "../../models/WeatherResponse";
import dayjs from "dayjs";

interface ForecastItemProps {
  data: Forecast;
  unit: Unit;
}

const ForecastItem: React.FC<ForecastItemProps> = ({ data, unit }) => {
  const getWeatherIconSrc = (iconcode: string) => {
    return "http://openweathermap.org/img/w/" + iconcode + ".png";
  };

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: "100px",
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography
          level="h3"
          sx={{
            fontWeight: "400",
            fontSize: "10px",
            lineHeight: 1,
            padding: "5px",
          }}
        >
          {dayjs(data.dt_txt).format("llll")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "4px",
          }}
        >
          <Box
            component="img"
            sx={{
              width: "40px",
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              margin: "0 auto",
            }}
            src={getWeatherIconSrc(data.weather[0].icon)}
          />
        </Box>
        <Typography
          level="h3"
          sx={{
            fontSize: "12px",
            marginBottom: "8px",
          }}
        >
          {data.main.temp} {getTempUnit(unit)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ForecastItem;
