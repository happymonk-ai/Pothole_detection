// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { ChangeEvent, useEffect, useState } from "react";

const useVideo = (videoElement: any) => {
  const target = videoElement?.current;
  const [playerState, setPlayerState] = useState({
    isPlaying: true,
    progress: 0,
    speed: 1,
    isMuted: true,
    isLoading: false,
  });

  const handleIsLoading = () => {
    setPlayerState({
      ...playerState,
      isLoading: true,
    });
  };
  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  // play or pauses the video player
  const handlePlay = async () => {
    if (target?.paused && !playerState?.isPlaying) {
      return target?.play();
    }
    if (!target?.paused && playerState?.isPlaying) {
      target?.pause();
    }
  };

  useEffect(() => {
    handlePlay();
  }, [playerState?.isPlaying]);

  const handleOnTimeUpdate = () => {
    const progress = (target.currentTime / target.duration) * 1000 || 0;
    setPlayerState({
      ...playerState,
      progress,
    });
  };

  const handleVideoProgress = (event: ChangeEvent) => {
    const manualChange = Number(event.target?.value);
    target.currentTime = (target.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const handleVideoSpeed = (event: ChangeEvent) => {
    const speed = Number(event.target?.value);
    target.playbackRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  const handleFullScreen = () => {
    target.requestFullscreen();
  };
  //   useEffect(() => {
  //     playerState.isMuted ? (target!.muted = true) : (target!.muted = false);
  //   }, [playerState.isMuted]);

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    handleFullScreen,
    handleIsLoading,
  };
};

export default useVideo;
