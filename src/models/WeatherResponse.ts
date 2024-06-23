import { CountryCode } from "./CountryCode";
import { WeatherCondition } from "./WeatherConditions";

export type Unit = "imperial" | "metric" | "standard";

export interface Coordinate {
  lon: number;
  lat: number;
}
export interface Weather {
  id: WeatherCondition;
  main: string;
  description: string;
  icon: string;
}

export type Base = "stations" | "cities" | string;

export interface Main {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface Clouds {
  all: number;
}

export interface ForecastPrecipitation {
  "3h": number;
}

export interface Precipitation extends ForecastPrecipitation {
  "1h"?: number;
}

export interface City {
  id: number;
  name: string;
  coord: Coordinate;
  country: CountryCode;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
