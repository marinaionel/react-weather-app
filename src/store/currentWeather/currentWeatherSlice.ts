import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CurrentWeatherResponse } from "../../models/CurrentWeatherResponse";
import { Unit } from "../../models/WeatherResponse";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";

const WEATHER_API_BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;
const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

interface CurrentWeatherState {
  currentWeather: CurrentWeatherResponse | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState: CurrentWeatherState = {
  currentWeather: null,
  status: "idle",
  error: undefined,
};

export const fetchCurrentWeatherThunk = createAsyncThunk<
  CurrentWeatherResponse,
  { lat: number; lon: number; units: Unit },
  AsyncThunkConfig
>("fetchCurrentWeather", async ({ lat, lon, units }, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `${WEATHER_API_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${units}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch current weather");
    }
    const data: CurrentWeatherResponse = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue("Failed to fetch current weather");
  }
});

export const searchSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeatherThunk.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(fetchCurrentWeatherThunk.fulfilled, (state, action) => {
        state.currentWeather = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchCurrentWeatherThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default searchSlice.reducer;
