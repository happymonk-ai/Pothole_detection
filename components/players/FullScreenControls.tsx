import Image from "next/image";
import { images } from "../../constants/images";
import styles from "./controls.module.scss";

const FullScreenControls = () => {
  return (
    <div className={styles.controls_container}>
      <div className={styles.left}>
        <div className={styles.icon_container}>
          <Image src={images.player_location} alt="" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.full_address}>Narsingi road, Hyderabad</h1>
          <h2 className={styles.region}>Telengana</h2>
        </div>
      </div>

      <div className={styles.right}>
        <Image src={images.player_mute} alt="" className={styles.icon} />
        <Image src={images.player_full_screen} alt="" className={styles.icon} />
      </div>
    </div>
  );
};

export default FullScreenControls;
