import styles from "./index.module.scss";
import VideoCard from "./VideoCard";

const VideoCards = ({ frames }: { frames: any }) => {
  return (
    <div className={styles.videos_container}>
      {frames?.map((frame: any) => (
        <VideoCard key={Math.random()} frame={frame} />
      ))}
    </div>
  );
};

export default VideoCards;
