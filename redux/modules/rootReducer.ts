import { combineReducers } from "redux";
import authSlice from "./actions/authSlice";

// combine reducers
export const rootReducer = combineReducers({
  auth: authSlice,
});
