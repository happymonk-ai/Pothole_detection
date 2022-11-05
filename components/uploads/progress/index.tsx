import Image from "next/image";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../../constants/images";
import { setShowProgress } from "../../../redux/modules/slices/uploaderSlice";
import { RootState } from "../../../redux/store";
import styles from "./index.module.scss";

interface IUploadProgress {
  error: string;
  fileName: string;
}

const UploadProgress: FC<IUploadProgress> = ({ error, fileName }) => {
  const { progress, filesLength, currentFileNumber, showProgress } =
    useSelector((state: RootState) => state.uploader);

  const dispatch = useDispatch();
  return (
    (showProgress && filesLength > 0 && (
      <div className={styles.upload_progress}>
        <h1 className={styles.title}>
          Uploading - {currentFileNumber}/{filesLength} files
        </h1>
        <div className={styles.progress}>
          <div className={styles.status}>
            <span className={styles.file_name}>{fileName}</span>
            <div className={styles.icons_container}>
              <Image
                src={images.close_filled}
                alt=""
                className={styles.icon}
                priority={true}
                onClick={() => {
                  dispatch(setShowProgress(false));
                }}
              />
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
    )) ||
    null
  );
};

export default UploadProgress;
