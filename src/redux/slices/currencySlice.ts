import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export type Currency = "AMD" | "USD" | "RUB";

const currencySlice = createSlice({
  name: "currency",
  initialState: "USD",
  reducers: {
    setCurrency: (state, action: PayloadAction<Currency>) => {
      return action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
