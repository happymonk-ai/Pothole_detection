// import VideoPlayer from "../../../players/VideoPlayer";
import styles from "./videos.module.scss";

const VideoCards = ({ frames }: { frames: any[] }) => {
  return (
    <div className={styles.video_cards}>
      {frames?.map((frame: string) => (
        // <VideoPlayer
        //   key={Math.random()}
        //   url="https://detectron.ckdr.co.in/uploads/ddpai_x2pro/1666871464596/20220922201629_0054_1666871464597.mp4"
        //   className={styles.player}
        // />
        <img
          src={
            frame
              ? frame.replace(
                  "./output/",
                  `${process.env.NEXT_PUBLIC_IMAGES_HOST}`
                )
              : ""
          }
          alt=""
          key={Math.random()}
          className={styles.player}
        />
      ))}
    </div>
  );
};

export default VideoCards;
