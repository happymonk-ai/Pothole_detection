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
          url="https://detectron.ckdr.co.in/uploads/ddpai_x2pro/1666871464596/20220922201629_0054_1666871464597.mp4"
          className={styles.player}
        />
      ))}
    </div>
  );
};

export default VideoCards;
