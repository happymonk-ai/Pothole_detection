import { createSlice } from "@reduxjs/toolkit";

// Type for our state
export interface SidebarShareState {
    isFullScreen: boolean;
    active: string;
}

// Initial state
const initialState: SidebarShareState = {
    isFullScreen: false,
    active: ""
};

// Actual Slice
export const playerSlice = createSlice({
    name: "videoplayers",
    initialState,
    reducers: {
        setFullScreenMode(state, action) {
            state.isFullScreen = action.payload.isFullScreen;
            state.active = action.payload.url;
        },
    },
});

export const { setFullScreenMode } = playerSlice.actions;

export default playerSlice.reducer;
