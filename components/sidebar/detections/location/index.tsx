import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import styles from "./index.module.scss";
import LocationCard from "./LocationCard";

const LocationCards = () => {
  const { detections } = useSelector((state: RootState) => state.detections);
  return (
    <div className={styles.locations}>
      {detections?.map(() => (
        <LocationCard key={Math.random()} data={detections} />
      ))}
    </div>
  );
};

export default LocationCards;
