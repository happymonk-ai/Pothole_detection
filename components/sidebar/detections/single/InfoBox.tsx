import Image from "next/image";
import { FC } from "react";
import { images } from "../../../../constants/images";
import styles from "./index.module.scss";

export enum infoBoxtypes {
  perimeter = "Perimeter",
  length = "Length",
  width = "Width",
}

type InfoBoxProps = {
  type: infoBoxtypes;
  info: string;
};

const InfoBox: FC<InfoBoxProps> = ({ type, info }) => {
  const icon =
    type === infoBoxtypes.perimeter
      ? "perimeter"
      : type === infoBoxtypes.length
      ? "length"
      : "width";
  return (
    <div className={styles.info_box}>
      <div className={styles.icon_container}>
        <Image
          src={images[icon]}
          alt=""
          className={styles.icon}
          priority={true}
        />
      </div>

      <span className={styles.type}>{type}</span>
      <h2 className={styles.info}>{info}</h2>
    </div>
  );
};

export default InfoBox;
