import { FC } from "react";
import styles from "./index.module.scss";

type TGeneralProps = {
  handleSelectedFiles: (files: FileList) => void;
  text: string;
};
const GeneralInput: FC<TGeneralProps> = ({ handleSelectedFiles, text }) => {
  return (
    <label
      htmlFor="uploadInput"
      onChange={(e: any) => {
        handleSelectedFiles(e.target.files);
        e.target.value = null;
      }}
      className={styles.files_upload_label}
    >
      <h1 className={styles.action}>{text}</h1>
      <input type="file" multiple id="uploadInput" className={styles.input} />
    </label>
  );
};

export default GeneralInput;
