import { FC } from "react";
import styles from "./index.module.scss";
import common_tyles from "../../../../styles/common.module.scss";

type TDetectionsProps = {
  date: string;
};

const DetectionsHeading: FC<TDetectionsProps> = ({ date }) => {
  return (
    <div className={styles.heading}>
      <h1 className={`${styles.left} ${common_tyles.sidebar_main_header}`}>
        Potholes Detected
      </h1>
      <h2 className={`${styles.right}  ${common_tyles.sidebar_main_header}`}>
        {date}
      </h2>
    </div>
  );
};

export default DetectionsHeading;
