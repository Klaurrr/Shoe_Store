import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sneakers: [],
};

const sneakersInitSlice = createSlice({
    name: "sneakers",
    initialState,
    reducers: {
        setSneakersInit(state, action) {
            state.sneakers = action.payload;
        },
    },
});

export const { setSneakersInit } = sneakersInitSlice.actions;

export default sneakersInitSlice.reducer;
