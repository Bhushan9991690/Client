import { createSlice } from "@reduxjs/toolkit";

const Toggle = createSlice({
  name: "toggle",
  initialState: { toggleState: false },
  reducers: {
    toggleState: (state) => {
      state.toggleState = !state.toggleState;
    },
  },
});
export const { toggleState } = Toggle.actions;
export default Toggle.reducer;
