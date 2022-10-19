import { combineReducers } from "redux";
import sidebarShareSlice from "./actions/sidebarShareSlice";
import sidebarDetectionsSlice from "./actions/detectionsSlice";

// combine reducers
export const rootReducer = combineReducers({
    share: sidebarShareSlice,
    detections: sidebarDetectionsSlice
});
