import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import mapPoints, { MapPoint } from "../../constants/mapPoints";
import { Unit } from "../../models/WeatherResponse";

interface SearchState {
  query: MapPoint;
  unit: Unit;
}

const initialState: SearchState = {
  query: mapPoints[0],
  unit: "metric",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<MapPoint>) => {
      state.query = action.payload;
    },
    setUnit: (state, action: PayloadAction<Unit>) => {
      state.unit = action.payload;
    },
  },
});

export const { setQuery, setUnit } = searchSlice.actions;

export default searchSlice.reducer;
