import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./slices/currencySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      currency: currencyReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
