import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import VideoPlayer from "../../../players/VideoPlayer";
import styles from "./videos.module.scss";

const VideoCards = () => {
  const { detections } = useSelector((state: RootState) => state.detections);
  return (
    <div className={styles.video_cards}>
      {detections.map(() => (
        <VideoPlayer
          key={Math.random()}
          url="https://drive.google.com/uc?export=download&id=1M1G6EJ58hWoFJ_JyTqPQlT_ujMTUgdum"
          className={styles.player}
        />
      ))}
    </div>
  );
};

export default VideoCards;
