import { getMapData } from './../actions/uploads/index';
import { createSlice } from "@reduxjs/toolkit";

// Type for our state
export interface MapDataState {
    all: any[],
    status: string;
    error: string | undefined;
    detections_length: number;
    severity: {
        low: number;
        high: number;
        moderate: number;
        total: number;
    },
    map_features: any[],
    videos: any[],
    all_potholes: any[],
    potholes: any[],
    move: {
        longitude: number | null,
        latitude: number | null
    }
}

// Initial state
const initialState: MapDataState = {
    all: [],
    status: "",
    error: "",
    detections_length: 0,
    severity: {
        low: 0,
        high: 0,
        moderate: 0,
        total: 0
    },
    videos: [],
    map_features: [],
    all_potholes: [],
    potholes: [],
    move: {
        longitude: null,
        latitude: null
    }
};

// Actual Slice
export const mapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        setMove(state, action) {
            state.move = action.payload
        },
        filterDetections(state, action) {
            state.potholes = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getMapData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getMapData.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.severity = action?.payload?.data?.severity,
                    state.videos = action?.payload?.data?.map_videos,
                    state.all = action?.payload?.data?.all,
                    state.map_features = action?.payload?.data?.map_features,
                    state.potholes = action?.payload?.data?.potholes,
                    state.all_potholes = action?.payload?.data?.potholes
            })
            .addCase(getMapData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
});

export const { setMove, filterDetections } = mapSlice.actions;

export default mapSlice.reducer;
