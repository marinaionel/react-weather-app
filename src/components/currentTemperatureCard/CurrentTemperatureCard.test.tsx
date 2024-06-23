import React from "react";
import { render, screen } from "@testing-library/react";
import CurrentTemperatureCard from "./CurrentTemperatureCard";
import { Unit } from "../../models/WeatherResponse";

describe("CurrentTemperatureCard", () => {
  it("renders weather icon, temperature, max and min temperature", () => {
    const mockWeatherIconUrl = "https://example.com/icon.png";
    const mockTemp = 22;
    const mockMaxTemp = 25;
    const mockMinTemp = 18;
    const mockUnit: Unit = "metric";

    render(
      <CurrentTemperatureCard
        weatherIconUrl={mockWeatherIconUrl}
        temp={mockTemp}
        maxTemp={mockMaxTemp}
        minTemp={mockMinTemp}
        unit={mockUnit}
      />
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", mockWeatherIconUrl);
    expect(screen.getByText(`${Math.round(mockTemp)} °C`)).toBeInTheDocument();
    expect(
      screen.getByText(
        `H:${Math.round(mockMaxTemp)}°C L:${Math.round(mockMinTemp)}°C`
      )
    ).toBeInTheDocument();
  });
});
