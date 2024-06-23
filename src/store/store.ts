import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search/searchSlice";
import currentWeatherSlice from "./currentWeather/currentWeatherSlice";

export const store = configureStore({
  reducer: { search: searchSlice, currentWeather: currentWeatherSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
