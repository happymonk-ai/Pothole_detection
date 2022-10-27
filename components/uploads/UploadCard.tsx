// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../constants/images";
import DialogLayout from "../../layouts/DialogLayout";
import {
  changeStep,
  resetUploader,
  // setSelectedFiles,
} from "../../redux/modules/slices/uploaderSlice";
import styles from "./index.module.scss";
// import FilesPreview from "./FilesPreview";
import React, { useEffect, useRef } from "react";
import UploadButton from "./UploadButton";
// import UploadLoader from "./UploadLoader";
import {
  uploadDdpaiFiles,
  uploadFiles,
} from "../../redux/modules/actions/uploads";
import { RootState } from "../../redux/store";
import ChooseCamera from "./choose/ChooseCamera";
import GoProUploader from "./gopro";
import { useState } from "react";
import { cameraTypes } from "./choose/CameraCard";
import UploadProgress from "./progress";
import FilesPreview from "./preview/FilesPreview";
// import LinkPaste from "./link";
import DdpaiSelector from "./ddpai/DdpaiSelector";
// import OrSeparator from "./or";
import SelectedFiles from "./ddpai/SelectedFiles";

export interface FileContent {
  lastModified: number;
  name: string;
  content: string;
}

const UploaderCard = () => {
  const {
    status,
    error,
    step,
    type,
    fileName,
    ddpaiFiles,
    uploaded_gopro,
    uploaded_ddpai,
  } = useSelector((state: RootState) => state.uploader);

  const dispatch = useDispatch();

  const generalInputRef = useRef(null);
  const inputRef = useRef(null);
  const handleClose = () => {
    dispatch(resetUploader());
  };

  const [files, setFiles] = useState<FileList>();

  const handleSelectedFiles = (e: any) => {
    dispatch(uploadFiles(e));
  };

  const handleRemoveFile = (file: FileList) => {
    const filtered = files.filter((el: any) => el.name !== file);

    inputRef.current.value = null;
    setFiles(filtered);
  };

  useEffect(() => {
    if (status === "succeeded") {
      // inputRef?.current?.value = null;
      // generalInputRef?.current?.value = null;
      // setFiles([]);
    }
  }, [status]);

  const header =
    (step === 0 && "Select the Camera from which the video is recorded") ||
    "Upload Video";

  const button_status =
    step === 0 && !type?.length
      ? true
      : step === 1 && !files?.length
      ? true
      : step === 1 && status === "loading"
      ? true
      : false;

  const handleButtonClick = () => {
    switch (step) {
      case 0:
        dispatch(changeStep(1));
        break;
      case 1:
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const _files = [ddpaiFiles.gpx, ddpaiFiles.mp4];
    setTimeout(() => {
      if (ddpaiFiles?.gpx && ddpaiFiles?.mp4) {
        dispatch(uploadDdpaiFiles(_files));
      }
    }, 500);
  }, [ddpaiFiles?.gpx, ddpaiFiles?.mp4]);

  const handleBack = () => {
    dispatch(changeStep(0));
  };

  return (
    <DialogLayout>
      <div className={styles.container}>
        <div className={styles.heading}>
          {step === 1 && (
            <div className={styles.back_icon_container}>
              <Image
                src={images.upload_back}
                alt=""
                onClick={handleBack}
                className={styles.back_icon}
              />
            </div>
          )}
          <h2 className={`${styles.title} ${styles.gray_title}`}>{header}</h2>
          <div className={styles.icon_container}>
            <Image
              src={images.close_filled}
              alt=""
              className={styles.icon}
              onClick={handleClose}
            />
          </div>
        </div>
        {type === cameraTypes.gopro && step === 1 && (
          <GoProUploader
            handleSelectedFiles={handleSelectedFiles}
            inputRef={generalInputRef}
          />
        )}

        {type === cameraTypes.ddpai && step === 1 && <DdpaiSelector />}

        {step === 0 && <ChooseCamera />}
        <div className={styles.footer}>
          <UploadButton
            files={files}
            // isDisabled={!files?.length || status === "loading"}
            handleClick={handleButtonClick}
            isDisabled={button_status}
          />
        </div>
        {/* {status === "loading" && (
          <div className={styles.upload_loader}>
            <UploadLoader />
          </div>
        )} */}

        {/* <OrSeparator />
        <LinkPaste /> */}
        {step === 1 && type === cameraTypes.ddpai && <SelectedFiles />}

        {step === 1 && type === cameraTypes.gopro && status === "loading" && (
          <UploadProgress
            error={error || status === "failed"}
            fileName={fileName}
          />
        )}
        {step === 1 && status === "succeeded" && (
          <FilesPreview
            files={type === cameraTypes.gopro ? uploaded_gopro : uploaded_ddpai}
            handleRemove={handleRemoveFile}
          />
        )}
      </div>
    </DialogLayout>
  );
};

export default UploaderCard;
