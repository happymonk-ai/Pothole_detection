import { combineReducers } from "redux";
import sidebarShareSlice from "./slices/sidebarShareSlice";
import sidebarDetectionsSlice from "./slices/detectionsSlice";
import uploaderSlice from "./slices/uploaderSlice";
import playerSlice from "./slices/playersSlice";
import mapSlice from "./slices/mapSlice";

// combine reducers
export const rootReducer = combineReducers({
    share: sidebarShareSlice,
    detections: sidebarDetectionsSlice,
    uploader: uploaderSlice,
    player: playerSlice,
    map: mapSlice
});
