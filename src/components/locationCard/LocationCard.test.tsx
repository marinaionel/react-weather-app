import React from "react";
import { render, screen } from "@testing-library/react";
import LocationCard from "./LocationCard";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

describe("LocationCard", () => {
  it("renders location and formatted date/time", () => {
    const mockLocation = "New York";
    const mockTimezone = "America/New_York";

    const mockDate = "2023-01-01T00:00:00.000Z";
    jest.spyOn(dayjs(), "tz").mockReturnValueOnce(dayjs(mockDate));

    render(<LocationCard location={mockLocation} timezone={mockTimezone} />);

    expect(screen.getByText(mockLocation)).toBeInTheDocument();
    expect(
      screen.getByText(dayjs(mockDate).tz(mockTimezone).format("LLLL"))
    ).toBeInTheDocument();
  });
});
