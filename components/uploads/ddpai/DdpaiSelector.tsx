import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDdpaiFiles,
  setStatus,
} from "../../../redux/modules/slices/uploaderSlice";
import { RootState } from "../../../redux/store";
import DropZone from "../dropzone/DropZone";
import { IUploaderProps } from "../gopro";
import GpxInput from "../inputs/GpxInput";
import Mp4Input from "../inputs/Mp4Input";
import styles from "./index.module.scss";

const DdpaiSelector: FC<IUploaderProps> = () => {
  const dispatch = useDispatch();
  const { ddpaiFiles, status } = useSelector(
    (satte: RootState) => satte.uploader
  );

  const handleMp4 = (files: FileList) => {
    if (files[0] && files[0]?.type === "video/mp4") {
      dispatch(setDdpaiFiles({ gpx: ddpaiFiles.gpx, mp4: files[0] }));
    }
  };

  const handleGpx = (files: FileList) => {
    if (files[0] && files[0]?.name?.toLowerCase().includes(".gpx")) {
      dispatch(setDdpaiFiles({ mp4: ddpaiFiles.mp4, gpx: files[0] }));
    }
  };

  useEffect(() => {
    if (!ddpaiFiles.gpx && ddpaiFiles.mp4) {
      dispatch(setStatus(""));
    }
  }, [ddpaiFiles, status]);

  useEffect(() => {
    if (status === "succeeded") {
      dispatch(setDdpaiFiles({ mp4: null, gpx: null }));
    }
  }, [status]);
  return (
    <div className={styles.selector_container}>
      <DropZone
        disabled={ddpaiFiles?.mp4 ? true : false}
        note="Supported formates: MP4"
        key={Math.random()}
      >
        <Mp4Input text="Browse Video" handleMp4={handleMp4} />
      </DropZone>

      <DropZone
        note="Supported formates: GPX"
        disabled={ddpaiFiles.gpx ? true : false}
        key={Math.random()}
      >
        <GpxInput text="Browse gpx File" handleGpx={handleGpx} />
      </DropZone>
    </div>
  );
};

export default DdpaiSelector;
