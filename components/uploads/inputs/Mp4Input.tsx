import { FC } from "react";
import styles from "./index.module.scss";

type TInputProps = {
  handleMp4: (files: FileList) => void;
  text: string;
  inputRef?: any;
};

const Mp4Input: FC<TInputProps> = ({ handleMp4, text }) => {
  return (
    <label
      htmlFor="uploadInputMp4"
      onChange={(e: any) => {
        handleMp4(e.target.files);
        e.target.value = null;
      }}
      className={styles.files_upload_label}
    >
      <h1 className={styles.action}>{text}</h1>
      <input
        type="file"
        multiple
        id="uploadInputMp4"
        className={styles.input}
      />
    </label>
  );
};

export default Mp4Input;
