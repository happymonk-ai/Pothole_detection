import DetectionsHeading from "./heading";
import styles from "./index.module.scss";
import LocationCards from "./location";

const Detections = ({ date }: { date: string }) => {
  return (
    <div className={styles.container}>
      <DetectionsHeading date={date} />
      <LocationCards />
    </div>
  );
};

export default Detections;
