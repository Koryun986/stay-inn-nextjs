import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Languages = "Armenian" | "English" | "Russian";

const languageSlice = createSlice({
  name: "language",
  initialState: "English",
  reducers: {
    setLanguage: (state, action: PayloadAction<Languages>) => {
      return action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
