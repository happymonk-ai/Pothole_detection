import Image from "next/image";
import { FC } from "react";
import { useSelector } from "react-redux";
import { images } from "../../../constants/images";
import { RootState } from "../../../redux/store";
import styles from "./index.module.scss";

type FileProps = {
  name: string;
  handleRemove: () => void;
  title: string;
};
const SelectedFile: FC<FileProps> = ({ name, handleRemove, title }) => {
  const { status, progress } = useSelector(
    (state: RootState) => state.uploader
  );

  const formatName = (name: string) => {
    if (
      name?.toLowerCase().includes(".mp4") &&
      name?.toLowerCase().replace(".mp4", "").length > 16
    ) {
      return name
        ?.toLowerCase()
        .replace(".mp4", "")
        .substring(0, 16)
        .concat("..mp4");
    }

    if (
      name?.toLowerCase().includes(".gpx") &&
      name?.toLowerCase().replace(".gpx", "").length > 16
    ) {
      return name
        ?.toLowerCase()
        .replace(".gpx", "")
        .substring(0, 16)
        .concat("..gpx");
    }

    return name;
  };
  return (
    <div className={styles.selected_file}>
      {(status === "loading" || status === "succeeded") && (
        <h1 className={`${styles.title} ${styles.title_pre_upload}`}>
          {title}
        </h1>
      )}

      <div className={styles.content}>
        <h2 className={styles.file_name}>{formatName(name)}</h2>
        <Image
          src={images.close_filled}
          alt=""
          className={styles.icon}
          onClick={handleRemove}
          priority={true}
        />
      </div>
      {status === "loading" && (
        <div
          className={styles.progress_bar}
          style={{ width: `${(progress * 196) / 100}px` }}
        ></div>
      )}
    </div>
  );
};

export default SelectedFile;
