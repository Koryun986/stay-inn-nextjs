import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./slices/currencySlice";
import languageReducer from "./slices/languageSlice";
import userReducer from "./slices/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      currency: currencyReducer,
      language: languageReducer,
      user: userReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
