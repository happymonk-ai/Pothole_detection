import { FC } from "react";
import { useDispatch } from "react-redux";
import { setShowProgress } from "../../../redux/modules/slices/uploaderSlice";
import styles from "./index.module.scss";

type TGeneralProps = {
  handleSelectedFiles: (files: FileList) => void;
  text: string;
};
const GeneralInput: FC<TGeneralProps> = ({ handleSelectedFiles, text }) => {
  const dispatch = useDispatch();
  return (
    <label
      htmlFor="uploadInputGeneral"
      onChange={(e: any) => {
        dispatch(setShowProgress(true));
        handleSelectedFiles(e.target.files);
        e.target.value = null;
      }}
      className={styles.files_upload_label}
    >
      <h1 className={styles.action}>{text}</h1>
      <input
        type="file"
        multiple
        id="uploadInputGeneral"
        className={styles.input}
      />
    </label>
  );
};

export default GeneralInput;
