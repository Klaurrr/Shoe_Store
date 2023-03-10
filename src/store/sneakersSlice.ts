import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
};

const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    setBookMarks(state, action) {
      state.bookmarks = state.bookmarks.concat(action.payload.bookmarks);
    },
    filterBookMarks(state, action) {
      state.bookmarks = action.payload.bookmarks;
    },
  },
});

export const { setBookMarks, filterBookMarks } = sneakersSlice.actions;

export default sneakersSlice.reducer;
