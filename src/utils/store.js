import { configureStore } from "@reduxjs/toolkit";
import UserRedux from "./Slices/UserSlice";
import feedReducer from "./Slices/FeedSlice";
import Toggle from "./Slices/ToggleSlice";
import Request from "./Slices/Request";
const appStore = configureStore({
  reducer: {
    user: UserRedux,
    feed: feedReducer,
    toggle: Toggle,
    request: Request,
  },
});
export default appStore;
