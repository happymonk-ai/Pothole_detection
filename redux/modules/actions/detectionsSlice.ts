import { createSlice } from "@reduxjs/toolkit";
import { CategoryTypes } from '../../../components/sidebar/cards/categories/CategoryBox';




export interface IDetectionsCard {
    detections: Array<{
        type: CategoryTypes;
        name: string;
        coordinates: string;
        time: string;
        videos?: Array<{
            url: string;
        }>;
    }>
}

// Initial state
const initialState: IDetectionsCard = {
    detections: [
        {
            type: CategoryTypes.high,
            name: "Maula Ali Road",
            coordinates: "26.92050, N, 7191650, E",
            time: "12:35 PM",
            videos: [{ url: "" }]


        },
        {
            type: CategoryTypes.low,
            name: "Maula Ali Road",
            coordinates: "26.92050, N, 7191650, E",
            time: "12:35 PM",
            videos: [{ url: "" }]
        },
        {
            type: CategoryTypes.moderate,
            name: "Maula Ali Road",
            coordinates: "26.92050, N, 7191650, E",
            time: "12:35 PM",
            videos: [{ url: "" }]
        }
    ]
}
// Actual Slice
export const sidebarDetectionsSlice = createSlice({
    name: "sidebardetections",
    initialState,
    reducers: {
        setSidebarDetections(state, action) {
            state.detections = action.payload;
        },
    },
});

export const { setSidebarDetections } = sidebarDetectionsSlice.actions;

export default sidebarDetectionsSlice.reducer;
