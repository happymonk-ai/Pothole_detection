import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import styles from "./videos.module.scss";

const VideoCards = () => {
  const { detections } = useSelector((state: RootState) => state.detections);
  return (
    <div className={styles.video_cards}>
      {detections.map(() => (
        <div className={styles.video_card} key={Math.random()}></div>
      ))}
    </div>
  );
};

export default VideoCards;
