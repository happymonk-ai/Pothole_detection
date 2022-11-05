import { cameraTypes } from './../../../../components/uploads/choose/CameraCard';
import { createAsyncThunk } from "@reduxjs/toolkit"
import http from "../../../../utils/http"
import { store } from "../../../store";
import { deleteDdpaiFile, deleteGoProFile, setCurrentFileNumber, setDdpaidUploadingFiles, setFileName, setFilesLength, setUploadedDdpai, setUploadedGopro, updateProgress } from '../../slices/uploaderSlice';


export const getUploads = createAsyncThunk(
    'uploadsgetFiles',
    async () => {
        const res = await http.get("/uploads");
        return res.data;
    })



export const uploadFiles = createAsyncThunk("files/uploadFiles", async (files: FileList) => {
    try {

        const videos = Array.from(files);

        store.dispatch(setFilesLength(videos?.length))
        let count = 0;
        const res =
            videos?.map((file: File) => {
                count++;
                store.dispatch(setCurrentFileNumber(count));
                store.dispatch(setFileName(file?.name));
                const formData = new FormData();
                formData.append("files", file)
                http.post(`/uploads?type=gopro`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                    onUploadProgress: (progressEvent) => {
                        const progress = Math.round((progressEvent.loaded * 100) / (progressEvent?.total || 0));
                        store.dispatch(updateProgress(progress))

                    }
                }).then((result) => store.dispatch(setUploadedGopro([...result.data.files])))
            });
        return res;

    } catch (error) {
        // store.dispatch(resetUploader());
        throw new Error("Something went wrong");

    };
});


export const uploadDdpaiFiles = createAsyncThunk("files/uploadDdpaiFiles", async (files: any) => {
    try {
        const formData = new FormData();

        const upload_files = {
            mp4: "",
            gpx: ""
        }
        files?.map((file: any) => {
            if (file.name?.toLowerCase().includes(".mp4")) {
                upload_files.mp4 = file.name
            }
            if (file.name?.toLowerCase().includes(".gpx")) {
                upload_files.gpx = file.name
            }
            formData.append("files", file);
        });

        store.dispatch(setDdpaidUploadingFiles(upload_files));

        const res = http.post(`/uploads?type=ddpai_x2pro`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: (progressEvent) => {
                const progress = Math.round(
                    (progressEvent.loaded * 100) / (progressEvent?.total || 0)
                );
                store.dispatch(updateProgress(progress));
            },
        }).then((result) => {
            store.dispatch(setUploadedDdpai([...result.data.files]))
        });

        return res;
    } catch (error) {
        // store.dispatch(resetUploader());
        throw new Error("Something went wrong");

    }
});




export const deleteFile = createAsyncThunk("files/deleteFiles", async (file: any) => {
    try {

        const path = file.cameraType === cameraTypes.ddpai && file?.destination || `${file?.destination}/${file.name}`
        const res = http.delete(`/uploads?path=${path}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {

            if (file.cameraType === cameraTypes.ddpai) {
                store.dispatch(deleteDdpaiFile(file?.name))
            }
            if (file.cameraType === cameraTypes.gopro) {
                store.dispatch(deleteGoProFile(file?.name))
            }
        });

        return res;
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");

    }
})


export const getMapData = createAsyncThunk(
    'map/mapData',
    async () => {
        try {
            const res = await http.get("/map_data");
            return res.data;
        } catch (error) {
            throw new Error("Something went wrong");
        }
    })