import { useDispatch, useSelector } from "react-redux";
import { setDdpaiFiles } from "../../../redux/modules/slices/uploaderSlice";
import { RootState } from "../../../redux/store";
import SelectedFile from "./SelectedFile";
import styles from "./index.module.scss";

const SelectedFiles = () => {
  const { ddpaiFiles, error, status, ddpaiUploadingFiles } = useSelector(
    (satte: RootState) => satte.uploader
  );

  const dispatch = useDispatch();

  const handleRemoveMp4 = () => {
    dispatch(setDdpaiFiles({ ...ddpaiFiles, mp4: null }));
  };

  const handleRemoveGpx = () => {
    dispatch(setDdpaiFiles({ ...ddpaiFiles, gpx: null }));
  };

  return (
    <div className={styles.selected_files_container}>
      {status !== "succeeded" && (
        <div className={styles.top}>
          {ddpaiFiles?.mp4 && (
            <div className={styles.mp4}>
              <SelectedFile
                name={
                  (!ddpaiFiles.gpx && "Video file Selected") ||
                  ddpaiUploadingFiles.mp4
                }
                handleRemove={handleRemoveMp4}
                title="Uploading Video file"
              />
            </div>
          )}
          {ddpaiFiles?.gpx && (
            <div className={styles.gpx}>
              <SelectedFile
                name={
                  (!ddpaiFiles?.mp4 && "Gpx file Selected") ||
                  ddpaiUploadingFiles.gpx
                }
                handleRemove={handleRemoveGpx}
                title="Uploading gpx file"
              />
            </div>
          )}
        </div>
      )}

      {status !== "loading" && status !== "succeeded" && (
        <p className={styles.files_note}>
          Note: Browse the {ddpaiFiles?.mp4 ? "gpx" : "mp4"} file to upload the
          files together.
        </p>
      )}

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

export default SelectedFiles;
