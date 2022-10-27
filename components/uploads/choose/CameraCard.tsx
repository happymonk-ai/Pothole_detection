import { images } from "../../../constants/images";

import Image from "next/image";
import { FC } from "react";
import styles from "./choose.module.scss";

export enum cameraTypes {
  gopro = "gopro",
  ddpai = "ddpai_x2pro",
}

interface ICameraProps {
  type: cameraTypes;
  handleActive: (type: cameraTypes) => void;
  active: boolean;
}

const CameraCard: FC<ICameraProps> = ({ type, handleActive, active }) => {
  const highlightCard = () => {
    handleActive(type);
  };

  const icon =
    type === cameraTypes.gopro && active
      ? images.gopro
      : type === cameraTypes.gopro && !active
      ? images.gopro_inactive
      : type === cameraTypes.ddpai && active
      ? images.ddpai
      : images.ddpai_inactive;

  return (
    <div className={styles.card} onClick={highlightCard}>
      <div className={styles.card_info}>
        <div
          className={`${styles.icon_container} ${
            active && styles.active_icon_container
          }`}
        >
          <Image src={icon} alt="" priority={true} />
        </div>
        <h2 className={`${styles.type} ${active && styles.active_type}`}>
          {(type === cameraTypes.gopro && "GoPro") || "DDPAI"}
        </h2>
      </div>
    </div>
  );
};

export default CameraCard;
