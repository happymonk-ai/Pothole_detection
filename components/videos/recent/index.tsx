import VideoPlayer from "../../players/VideoPlayer";
import styles from "./index.module.scss";

const RecentVideos = () => {
  return (
    <div className={styles.recent_videos}>
      <h1 className={styles.title}>Recent VIdeos</h1>
      <div className={styles.videos_container}>
        {[1, 2, 3, 4, 5].map(() => (
          <VideoPlayer
            key={Math.random()}
            url="https://drive.google.com/uc?export=download&id=1M1G6EJ58hWoFJ_JyTqPQlT_ujMTUgdum"
            className={styles.recent_video}
            settings={{
              isClickable: true,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentVideos;
