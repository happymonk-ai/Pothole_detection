import VideoPlayer from "../../../players/VideoPlayer";
import styles from "./index.module.scss";

const VideoCard = () => {
  return (
    <VideoPlayer
      url="https://drive.google.com/uc?export=download&id=1M1G6EJ58hWoFJ_JyTqPQlT_ujMTUgdum"
      className={styles.player}
    />
  );
};

export default VideoCard;
