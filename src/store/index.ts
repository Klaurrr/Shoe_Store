import { configureStore } from "@reduxjs/toolkit";
import bookMarksReducer from "./sneakersSlice";
import sneakersInitReducer from "./sneakersInitSlice";

export const store = configureStore({
  reducer: {
    bookMarks: bookMarksReducer,
    sneakersInit: sneakersInitReducer,
  },
});
