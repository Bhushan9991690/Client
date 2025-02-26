import { createSlice } from "@reduxjs/toolkit";

const feedReducer = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    // removeFeed: () => null,
    removeUserFromFeed: (state, action) => {
      const newFeed = state.filter((c) => {
        return c._id !== action.payload;
      });
      return newFeed;
    },
  },
});
export default feedReducer.reducer;
export const { addFeed, removeUserFromFeed } = feedReducer.actions;
