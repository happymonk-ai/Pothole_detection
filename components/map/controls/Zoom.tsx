import Image from "next/image";
import { FC } from "react";
import { images } from "../../../constants/images";
import styles from "./index.module.scss";

interface IZoomProps {
  handleIn: () => void;
  handleOut: () => void;
}
const MapZoomControls: FC<IZoomProps> = ({ handleIn, handleOut }) => {
  return (
    <div className={styles.map_zoom_controls}>
      <div className={styles.icon_container} onClick={handleIn}>
        <Image src={images.plus} alt="" height={50} />
      </div>
      <div className={styles.icon_container} onClick={handleOut}>
        <Image src={images.minus} alt="" height={50} />
      </div>
    </div>
  );
};

export default MapZoomControls;
