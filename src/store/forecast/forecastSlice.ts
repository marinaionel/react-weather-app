import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Unit } from "../../models/WeatherResponse";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { ThreeHourResponse } from "../../models/ThreeHourResponse";

const WEATHER_API_BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;
const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

interface ForecastState {
  forecast: ThreeHourResponse | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState: ForecastState = {
  forecast: null,
  status: "idle",
  error: undefined,
};

export const fetchForecast = createAsyncThunk<
  ThreeHourResponse,
  { lat: number; lon: number; units: Unit },
  AsyncThunkConfig
>("fetchForecast", async ({ lat, lon, units }, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `${WEATHER_API_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${units}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch forecast");
    }
    const data: ThreeHourResponse = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue("Failed to fetch forecast");
  }
});

export const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default forecastSlice.reducer;
