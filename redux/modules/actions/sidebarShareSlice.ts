import { createSlice } from "@reduxjs/toolkit";

// Type for our state
export interface SidebarShareState {
    isOpen: boolean;
}

// Initial state
const initialState: SidebarShareState = {
    isOpen: false,
};

// Actual Slice
export const sidebarShareSlice = createSlice({
    name: "sidebarshare",
    initialState,
    reducers: {
        setSidebarShareIsOpen(state, action) {
            state.isOpen = action.payload;
        },
    },
});

export const { setSidebarShareIsOpen } = sidebarShareSlice.actions;

export default sidebarShareSlice.reducer;
