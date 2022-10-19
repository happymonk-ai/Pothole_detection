import Image from "next/image";
import { FC } from "react";
import styles from "./index.module.scss";

export type TShareProps = {
  icon: string;
  name: string;
};
const Share: FC<TShareProps> = ({ icon, name }) => {
  return (
    <div className={styles.share}>
      <div className={styles.icon_container}>
        <Image src={icon} alt="" className={styles.icon} />
      </div>

      <h2 className={styles.name}>{name}</h2>
    </div>
  );
};

export default Share;
