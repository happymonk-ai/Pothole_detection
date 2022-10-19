import { FC, useRef } from "react";
import { useDispatch } from "react-redux";
import useVideo from "../../hooks/custom/useVideo";
import { setFullScreenMode } from "../../redux/modules/slices/playersSlice";

interface IVideoProps {
  url: string;
  className?: string;
  settings?: {
    isClickable?: boolean;
    autoPlay?: boolean;
    controls?: boolean;
    mute?: boolean;
    loop?: boolean;
  };
}

const VideoPlayer: FC<IVideoProps> = ({ url, className, settings }) => {
  const playerRef = useRef<any>();
  const { playerState } = useVideo(playerRef);

  const { isMuted } = playerState;

  const dispath = useDispatch();

  const handleFullScreen = () => {
    if (settings?.isClickable) {
      dispath(setFullScreenMode({ isFullScreen: true, url }));
    }
  };
  return (
    <video
      ref={playerRef}
      className={className}
      muted={isMuted && settings?.mute}
      onClick={handleFullScreen}
      autoPlay={settings?.autoPlay}
      controls={settings?.controls}
      loop={settings?.loop}
    >
      <source type="video/mp4" src={url} />
    </video>
  );
};

export default VideoPlayer;
