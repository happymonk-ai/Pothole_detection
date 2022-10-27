import VideoPlayer from "../../../players/VideoPlayer";
import styles from "./index.module.scss";

const VideoCard = () => {
  return (
    <VideoPlayer
      url="https://detectron.ckdr.co.in/uploads/ddpai_x2pro/1666871464596/20220922201629_0054_1666871464597.mp4"
      className={styles.player}
    />
  );
};

export default VideoCard;
