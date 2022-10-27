import RecentVideos from "./videos";
import styles from "./index.module.scss";

const RecentVideosContainer = () => {
  return (
    <div className={styles.videos}>
      <RecentVideos />
    </div>
  );
};

export default RecentVideosContainer;
