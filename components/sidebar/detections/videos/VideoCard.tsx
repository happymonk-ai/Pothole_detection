import styles from "./index.module.scss";

const VideoCard = ({ frame }: { frame: any }) => {
  return (
    <img
      src={
        frame
          ? frame.replace("./output/", `${process.env.NEXT_PUBLIC_IMAGES_HOST}`)
          : ""
      }
      alt=""
      className={styles.player}
    />
  );
};

export default VideoCard;
