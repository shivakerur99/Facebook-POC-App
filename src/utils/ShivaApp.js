import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./crud";
const ShivaApp = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default ShivaApp;
