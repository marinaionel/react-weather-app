import { Unit } from "../models/WeatherResponse";

export default (unit: Unit) => {
  switch (unit) {
    case "imperial":
      return "°F";
    case "metric":
      return "°C";
    case "standard":
      return "°K";
  }
};
