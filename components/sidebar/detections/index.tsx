import DetectionsHeading from "./heading";
import styles from "./index.module.scss";
import LocationCards from "./location";

const Detections = () => {
  return (
    <div className={styles.container}>
      <DetectionsHeading date="13/10/2022" />
      <LocationCards />
    </div>
  );
};

export default Detections;  
