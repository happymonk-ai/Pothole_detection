import { FC } from "react";
import DropZone from "../dropzone/DropZone";
import GeneralInput from "../inputs/GeneralInput";
import styles from "./index.module.scss";

export interface IUploaderProps {
  handleSelectedFiles: (e: any) => void;
}

const GoProUploader: FC<IUploaderProps> = ({ handleSelectedFiles }) => {
  return (
    <div className={styles.gopro_uploader}>
      <DropZone note="Supported formates: MP4" disabled={false}>
        <GeneralInput
          text="Browse Videos"
          handleSelectedFiles={handleSelectedFiles}
        />
      </DropZone>
    </div>
  );
};

export default GoProUploader;
