import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import VideoPlayer from "../../players/VideoPlayer";
import styles from "./index.module.scss";

const RecentVideos = () => {
  const { videos } = useSelector((state: RootState) => state.map);
  return (
    <div className={styles.recent_videos}>
      <h1 className={styles.title}>Recent VIdeos</h1>
      <div className={styles.videos_container}>
        {videos?.map((video: string) => (
          <VideoPlayer
            key={Math.random()}
            url={`https://detectron.ckdr.co.in/uploads/${video}`}
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
