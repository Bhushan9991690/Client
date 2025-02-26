import { createSlice } from "@reduxjs/toolkit";
const Request = createSlice({
  name: "request",
  initialState:[],
  reducers: {
    addListOfRequest: (state, action) => {
      return action.payload;
    },
    removeUserRequest: (state, action) => {
      const newRequestList = state.filter((c) => {
        return c._id !== action.payload;
      });
      return newRequestList;
    },
  },
});
export const { addListOfRequest, removeUserRequest } = Request.actions;
export default Request.reducer;
