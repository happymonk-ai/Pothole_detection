import { FC } from "react";
import styles from "./index.module.scss";

type TRegionProps = {
  name: string;
  coordinates: string;
};

const Region: FC<TRegionProps> = ({ name, coordinates }) => {
  return (
    <div className={styles.top}>
      <h1 className={styles.title}>{name}</h1>
      <span className={styles.coordinates}>{coordinates}</span>
    </div>
  );
};

export default Region;
