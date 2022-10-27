import { useDispatch, useSelector } from "react-redux";
import { setCameraType } from "../../../redux/modules/slices/uploaderSlice";
import { RootState } from "../../../redux/store";
import CameraCard, { cameraTypes } from "./CameraCard";
import styles from "./choose.module.scss";

const ChooseCamera = () => {
  const dispatch = useDispatch();

  const { type } = useSelector((state: RootState) => state.uploader);
  const handleActive = (type: cameraTypes) => {
    dispatch(setCameraType(type));
  };

  return (
    <div className={styles.choose_camera}>
      <div className={styles.top}>
        <CameraCard
          type={cameraTypes.gopro}
          handleActive={handleActive}
          active={type === cameraTypes.gopro}
        />
        <CameraCard
          type={cameraTypes.ddpai}
          handleActive={handleActive}
          active={type === cameraTypes.ddpai}
        />
      </div>
    </div>
  );
};

export default ChooseCamera;
