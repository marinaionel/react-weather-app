import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search/searchSlice";
import currentWeatherSlice from "./currentWeather/currentWeatherSlice";
import forecastSlice from "./forecast/forecastSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    currentWeather: currentWeatherSlice,
    forecast: forecastSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
