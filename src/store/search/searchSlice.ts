import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import mapPoints, { MapPoint } from "../../constants/mapPoints";

interface SearchState {
  query: MapPoint;
}

const initialState: SearchState = {
  query: mapPoints[0],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<MapPoint>) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;
