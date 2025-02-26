import { createSlice } from "@reduxjs/toolkit";

const UserRedux = createSlice({
  name: "User",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});
export const { addUser, removeUser } = UserRedux.actions;
export default UserRedux.reducer;
