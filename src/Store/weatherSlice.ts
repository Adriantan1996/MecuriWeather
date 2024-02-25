import { CardProps } from "../Features/WeatherDisplayCard/WeatherDisplayCard";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AppState {
  latestResults: CardProps[];
}

const initialState: AppState = {
  latestResults: [],
};

const weatherSlice = createSlice({
  name: "latestWeatherResults",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<CardProps[]>) => {
      state.latestResults = action.payload;
    },
  },
});
export const { setState } = weatherSlice.actions;
export default weatherSlice.reducer;
