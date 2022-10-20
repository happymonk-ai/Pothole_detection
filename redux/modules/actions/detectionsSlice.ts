import { createSlice } from "@reduxjs/toolkit";
import { CategoryTypes } from '../../../components/sidebar/cards/categories/CategoryBox';



export type TDetection = {
    type: CategoryTypes;
    name: string;
    coordinates: string;
    time: string;
    videos?: Array<{
        url: string;
    }>
}


export interface IDetectionsCard {
    detections: Array<TDetection>;
    detection: TDetection;
    isDetailView: boolean
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
    ],
    detection: {
        name: "",
        type: CategoryTypes.high,
        time: "",
        coordinates: ""
    },
    isDetailView: false
}
// Actual Slice
export const sidebarDetectionsSlice = createSlice({
    name: "sidebardetections",
    initialState,
    reducers: {
        setSidebarDetections(state, action) {
            state.detections = action.payload;
        },
        setDetection(state, action) {
            state.detection = action.payload
        }
        ,
        setDetailView(state, action) {
            state.isDetailView = action.payload
        }
    },
});

export const { setSidebarDetections, setDetection, setDetailView } = sidebarDetectionsSlice.actions;

export default sidebarDetectionsSlice.reducer;
