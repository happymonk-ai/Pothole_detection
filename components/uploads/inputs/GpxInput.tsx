import { FC } from "react";
import styles from "./index.module.scss";

type TInputProps = {
  handleGpx: (files: FileList) => void;
  text: string;
  inputRef?: any;
};

const GpxInput: FC<TInputProps> = ({ handleGpx, text }) => {
  return (
    <label
      htmlFor="uploadInputGpx"
      onChange={(e: any) => {
        handleGpx(e.target.files);
        e.target.value = null;
      }}
      className={styles.files_upload_label}
    >
      <h1 className={styles.action}>{text}</h1>
      <input
        type="file"
        multiple
        id="uploadInputGpx"
        className={styles.input}
      />
    </label>
  );
};

export default GpxInput;
