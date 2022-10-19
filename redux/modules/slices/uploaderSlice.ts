import { cameraTypes } from './../../../components/uploads/choose/CameraCard';
import { createSlice } from "@reduxjs/toolkit";
import { deleteFile, getUploads, uploadDdpaiFiles, uploadFiles } from "../actions/uploads";


export interface IUploader {
    isOpen: boolean
    selectedFiles: Array<File>
    status: string;
    delete_status: string;
    uploads: any[];
    error: string | undefined;
    step: number;
    type: cameraTypes | string;
    progress: number;
    fileName: string | null;
    filesLength: number;
    currentFileNumber: number;
    uploaded_ddpai: any[];
    uploaded_gopro: any[];
    ddpaiFiles: {
        mp4: File | null
        gpx: File | null
    },
    ddpaiUploadingFiles: {
        mp4: string;
        gpx: string;
    }
}

// Initial state
const initialState: IUploader = {
    isOpen: false,
    selectedFiles: [],
    status: "",
    uploads: [],
    error: "",
    step: 0,
    type: "",
    progress: 0,
    fileName: null,
    filesLength: 0,
    currentFileNumber: 0,
    uploaded_ddpai: [],
    uploaded_gopro: [],
    delete_status: "",
    ddpaiFiles: {
        mp4: null,
        gpx: null
    },
    ddpaiUploadingFiles: {
        mp4: "",
        gpx: ""
    }
}
// Actual Slice
export const uploaderSlice = createSlice({
    name: "uploader",
    initialState,
    reducers: {
        openUploader(state, action) {
            state.isOpen = action.payload;
        },
        setSelectedFiles(state, action) {
            state.selectedFiles = action.payload
        },

        removeSelectedFile(state, action) {
            state.selectedFiles = action.payload
        },
        changeStep(state, action) {
            state.step = action.payload
        },

        setCameraType(state, action: { payload: cameraTypes }) {
            state.type = action.payload
        },
        updateProgress(state, action) {
            state.progress = action.payload
        },

        setFileName(state, action) {
            state.fileName = action.payload
        },
        setFilesLength(state, action) {
            state.filesLength = action.payload
        },
        setCurrentFileNumber(state, action) {
            state.currentFileNumber = action.payload
        },
        resetUploader: () => initialState,
        setDdpaiFiles(state, action) {
            state.ddpaiFiles = action.payload
        },
        setUploadedDdpai(state, action) {
            state.uploaded_ddpai = [...state.uploaded_ddpai, action.payload];
        },
        setUploadedGopro(state, action) {
            state.uploaded_gopro = [...state.uploaded_gopro, ...action.payload];
        },
        setDdpaidUploadingFiles(state, action) {
            state.ddpaiUploadingFiles = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        deleteGoProFile(state, action) {
            state.uploaded_gopro = state.uploaded_gopro.filter((el) => el.name !== action.payload)
        },
        deleteDdpaiFile(state, action) {
            state.uploaded_ddpai = state.uploaded_ddpai.filter((el) => el.name !== action.payload)
        },

    },
    extraReducers(builder) {
        builder
            .addCase(getUploads.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getUploads.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.uploads = state.uploads.concat(action.payload)
            })
            .addCase(getUploads.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(uploadDdpaiFiles.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(uploadDdpaiFiles.fulfilled, (state) => {
                state.status = 'succeeded'
            })
            .addCase(uploadDdpaiFiles.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(deleteFile.pending, (state) => {
                state.delete_status = 'loading'
            })
            .addCase(deleteFile.fulfilled, (state) => {
                state.delete_status = 'succeeded'
            })
            .addCase(deleteFile.rejected, (state, action) => {
                state.delete_status = 'failed'
                state.error = action.error.message
            })
            .addCase(uploadFiles.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(uploadFiles.fulfilled, (state) => {
                state.status = 'succeeded'
            })
            .addCase(uploadFiles.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })


    },
});

export const { openUploader, setSelectedFiles, removeSelectedFile, setCameraType, changeStep, resetUploader, updateProgress, setFileName, setFilesLength, setCurrentFileNumber, setDdpaiFiles, setUploadedDdpai, setDdpaidUploadingFiles, setUploadedGopro, setStatus, deleteDdpaiFile, deleteGoProFile } = uploaderSlice.actions;

export default uploaderSlice.reducer;