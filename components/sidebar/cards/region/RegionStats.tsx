import Image from "next/image";
import { images } from "../../../../constants/images";
import Details from "./Details";
import styles from "./index.module.scss";
import Region from "./Region";

const RegionStats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={images.region} alt="" className={styles.icon} />
      </div>
      <div className={styles.right}>
        <Region name="Hyderabad North" coordinates="26.92050, 71.91650" />
        <Details
          values={[
            { name: "Spatial density", amount: "22.5", unit: true },
            {
              name: "Road condition",
              amount: "Average",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default RegionStats;
