import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currency: "RUB",
};

const currencySlice = createSlice({
    name: "sneakers",
    initialState,
    reducers: {
        setCurrentCurrency(state, action) {
            state.currency = action.payload;
        },
    },
});

export const { setCurrentCurrency } = currencySlice.actions;

export default currencySlice.reducer;
