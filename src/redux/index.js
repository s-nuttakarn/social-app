import { combineReducers } from "redux";
import { postSlice } from "./post.slice";

export const rootReducers = combineReducers({
  post: postSlice.reducer,
});
