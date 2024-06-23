import React from "react";
import { Card, CardContent, Typography } from "@mui/joy";
import dayjs from "dayjs";

interface LocationCardProps {
  location: string;
  timezone: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ location, timezone }) => {
  return (
    <Card
      sx={{
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography level="h3">{location}</Typography>
        <Typography sx={{ color: "#5F667A" }}>
          {dayjs().tz(timezone).format("LLLL")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
