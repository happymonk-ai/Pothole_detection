import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../constants/images";
import DialogLayout from "../../layouts/DialogLayout";
import { setFullScreenMode } from "../../redux/modules/slices/playersSlice";
import { RootState } from "../../redux/store";
import FullScreenControls from "./FullScreenControls";
import styles from "./index.module.scss";
import VideoPlayer from "./VideoPlayer";

const FullScreenVideo = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state: RootState) => state.player);

  const handlePlayerClose = () => {
    dispatch(setFullScreenMode(false));
  };

  const video = document.getElementById("video") as HTMLVideoElement | null;

  useEffect(() => {
    video?.play();
  }, []);

  useEffect(() => {
    if (video != null) {
      video.play();
    }
  }, []);

  return (
    <DialogLayout>
      <div className={styles.fullscreen_container}>
        <div className={styles.close_container}>
          <Image
            src={images.player_close}
            alt=""
            className={styles.close_icon}
            onClick={handlePlayerClose}
          />
        </div>
        <VideoPlayer
          url={active}
          className={styles.player_fullscreen}
          settings={{
            autoPlay: true,
            controls: false,
            loop: true,
            width: "1198px",
            height: "720px",
          }}
        />
        <FullScreenControls />
      </div>
    </DialogLayout>
  );
};

export default FullScreenVideo;
