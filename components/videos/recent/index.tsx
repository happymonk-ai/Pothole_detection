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
            url="https://detectron.ckdr.co.in/uploads/ddpai_x2pro/1666871464596/20220922201629_0054_1666871464597.mp4"
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
