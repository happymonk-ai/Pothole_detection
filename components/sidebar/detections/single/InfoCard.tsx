import Image from "next/image";
import { FC } from "react";
import { images } from "../../../../constants/images";
import { CategoryTypes } from "../../cards/categories/CategoryBox";
import styles from "./index.module.scss";

interface IInfoCardProps {
  surface: string;
  location: {
    road: string;
    coordinates: string;
  };
  severity: CategoryTypes;
}

const InfoCard: FC<IInfoCardProps> = ({ surface, location, severity }) => {
  return (
    <div className={styles.info_card}>
      <div className={styles.heading}>
        <h1 className={styles.head_title}>More information</h1>
      </div>
      <div className={`${styles.content}  ${styles.content_container}`}>
        <div className={styles.top_details}>
          <div className={styles.icon_container}>
            <Image src={images.surface} alt="" />
          </div>
          <div className={`${styles.content}`}>
            <div className={styles.surface}>
              <h2 className={styles.title}>Surface area</h2>
              <h1 className={styles.info}>{surface}</h1>
            </div>
            <div className={styles.location}>
              <h1 className={styles.title}>Location</h1>
              <div className={styles.location_content}>
                <h2 className={styles.name}>{location?.road}</h2>
                <h1 className={styles.info}>{location?.coordinates}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom_details}>
          <div className={styles.icon_container}>
            <Image src={images.severity} alt="" />
          </div>
          <div className={styles.content}>
            <div className={styles.severity}>
              <h2 className={styles.title}>Severity</h2>
              <h1 className={styles.info}>{severity}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
