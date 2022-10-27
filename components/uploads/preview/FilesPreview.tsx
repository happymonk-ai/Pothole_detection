// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Image from "next/image";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../../constants/images";
import { deleteFile } from "../../../redux/modules/actions/uploads";
import { RootState } from "../../../redux/store";
import { cameraTypes } from "../choose/CameraCard";
import styles from "./index.module.scss";

type TPreviewProps = {
  handleRemove: (name: string | undefined) => void;
  files: any[];
};

const FilesPreview: FC<TPreviewProps> = ({ files }) => {
  const { type } = useSelector((state: RootState) => state.uploader);

  const dispatch = useDispatch();

  const handleDelete = (file) => {
    if (type === cameraTypes.gopro) {
      dispatch(deleteFile(file));
    }
  };

  return (
    <div className={styles.uploaded}>
      {files.length ? <h2 className={styles.title}>Uploaded</h2> : null}
      <div className={styles.choosen_files}>
        <div className={styles.files_preview}>
          {files?.map(
            (file: File | undefined) =>
              (type === cameraTypes.gopro && (
                <div className={styles.file_container} key={Math.random()}>
                  <h2 className={styles.name}>{file?.name}</h2>
                  <div className={styles.icon_container}>
                    <Image
                      src={images.delete_bold}
                      alt=""
                      className={styles.icon}
                      onClick={() => handleDelete(file)}
                      priority={true}
                    />
                  </div>
                </div>
              )) || (
                <div className={styles.pair_container} key={Math.random()}>
                  {file?.map((el) => (
                    <div
                      className={`${styles.file_container} ${styles.el_container}`}
                      key={Math.random()}
                    >
                      <h2 className={styles.name}>{el?.name}</h2>
                      <div className={styles.icon_container}>
                        <Image
                          src={images.delete_bold}
                          alt=""
                          className={styles.icon}
                          onClick={() => handleDelete(file)}
                          priority={true}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default FilesPreview;
