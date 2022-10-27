import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./index.module.scss";

interface IButtonProps {
  isDisabled: boolean;
  handleClick: () => void;
}

const UploadButton: FC<IButtonProps> = ({ isDisabled, handleClick }) => {
  const button_class = isDisabled
    ? styles.upload_button_disabled
    : styles.upload_button_enabled;

  const { step } = useSelector((state: RootState) => state.uploader);

  const text = (step === 0 && "Next") || " Upload Files";
  return (
    <button
      className={`${styles.upload_button} ${button_class}`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default UploadButton;
