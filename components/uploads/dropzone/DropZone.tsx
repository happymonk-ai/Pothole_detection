import Image from "next/image";
import React, { FC, ReactNode } from "react";
import { images } from "../../../constants/images";
import styles from "./index.module.scss";

interface IDropZoneProps {
  note: string;
  disabled: boolean;
  children: ReactNode;
}
const DropZone: FC<IDropZoneProps> = ({ note, disabled, children }) => {
  return (
    <div
      className={`${styles.drop_zone} ${disabled && styles.disabled_drop_zone}`}
    >
      <Image src={images.upload} alt="" className={styles.upload_img} />
      {children}
      <p className={styles.info}>{note}</p>
    </div>
  );
};

export default DropZone;
