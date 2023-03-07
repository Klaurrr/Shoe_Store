import { configureStore } from "@reduxjs/toolkit";
import bookMarksReducer from "./sneakersSlice";

export const store = configureStore({
  reducer: {
    bookMarks: bookMarksReducer,
  },
});
