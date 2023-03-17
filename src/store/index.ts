import { configureStore } from "@reduxjs/toolkit";
import bookMarksReducer from "./slices/sneakersSlice";
import sneakersInitReducer from "./slices/sneakersInitSlice";
import currencyReducer from "./slices/currencySlice";

export const store = configureStore({
    reducer: {
        bookMarks: bookMarksReducer,
        sneakersInit: sneakersInitReducer,
        currency: currencyReducer,
    },
});
