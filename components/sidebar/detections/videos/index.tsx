import styles from "./index.module.scss";
import VideoCard from "./VideoCard";

const VideoCards = () => {
  return (
    <div className={styles.videos_container}>
      {[...new Array(3)].map(() => (
        <VideoCard key={Math.random()} />
      ))}
    </div>
  );
};

export default VideoCards;
