import { createSlice } from "@reduxjs/toolkit";
import { CategoryTypes } from '../../../components/sidebar/cards/categories/CategoryBox';



export type TDetection = {
    severity: {
        type: string;
        value: number;
    };
    name: string;
    geo: {
        lon: string;
        lat: string
    };
    timestamp: string;
    id?: number;
    length?: number;
    width?: number;
    surfaceArea?: number;
    perimeter?: number;
    videos?: Array<{
        url: string;
    }>,

}


export interface IDetectionsCard {
    detections: Array<TDetection>;
    detection: TDetection;
    isDetailView: boolean;
    highlighted: CategoryTypes | null
}

// Initial state
const initialState: IDetectionsCard = {
    detections: [],
    highlighted: null,
    detection: {
        name: "",
        severity: {
            type: CategoryTypes.high,
            value: 0
        },
        timestamp: "",
        id: 0,
        length: 0,
        width: 0,
        surfaceArea: 0,
        perimeter: 0,
        geo: {
            lon: "",
            lat: ""
        },
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
        },
        setHighlighted(state, action) {
            state.highlighted = action.payload
        }
    },
});

export const { setSidebarDetections, setHighlighted, setDetection, setDetailView } = sidebarDetectionsSlice.actions;

export default sidebarDetectionsSlice.reducer;
