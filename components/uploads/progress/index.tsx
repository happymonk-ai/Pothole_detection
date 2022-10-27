import Image from "next/image";
import { FC } from "react";
import { useSelector } from "react-redux";
import { images } from "../../../constants/images";
import { RootState } from "../../../redux/store";
import styles from "./index.module.scss";

interface IUploadProgress {
  error: string;
  fileName: string;
}

const UploadProgress: FC<IUploadProgress> = ({ error, fileName }) => {
  const { progress, filesLength, currentFileNumber } = useSelector(
    (state: RootState) => state.uploader
  );

  return (
    <div className={styles.upload_progress}>
      <h1 className={styles.title}>
        Uploading - {currentFileNumber}/{filesLength} files
      </h1>
      <div className={styles.progress}>
        <div className={styles.status}>
          <span className={styles.file_name}>{fileName}</span>
          <div className={styles.icons_container}>
            <Image src={images.close_filled} alt="" className={styles.icon} />
          </div>
        </div>
        <div
          className={styles.progress_bar}
          style={{ width: `${(progress * 455) / 100}px` }}
        ></div>
      </div>
      {error && (
        <div className={styles.error_container}>
          <p className={styles.error}>
            {error || "something went wrong, try again!"}
          </p>
        </div>
      )}
    </div>
  );
};

export default UploadProgress;
