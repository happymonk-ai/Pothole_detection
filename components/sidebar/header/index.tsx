import Image from "next/image";
import { images } from "../../../constants/images";
import styles from "./index.module.scss";
import common_styles from "../../../styles/common.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarShareIsOpen } from "../../../redux/modules/actions/sidebarShareSlice";
import { RootState } from "../../../redux/store";
import { setDetailView } from "../../../redux/modules/actions/detectionsSlice";

const SidebarHeader = () => {
  const { isDetailView } = useSelector((state: RootState) => state.detections);

  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setSidebarShareIsOpen(true));
  };


  const handleDetailsClose = () => {
    dispatch(setDetailView(false))
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.left}`}>
        {isDetailView && (
          <Image src={images.arrow_left} alt="" className={styles.icon}  onClick={handleDetailsClose}/>
        )}
        <h1 className={`${styles.title}  ${common_styles.sidebar_main_header}`}>
          {(isDetailView && "Pothole detected") || "Potholes Metrics"}
        </h1>
      </div>
      {!isDetailView && (
        <div className={styles.right}>
          <Image
            src={images.share_green}
            alt=""
            onClick={handleOpen}
            className={styles.icon}
          />
        </div>
      )}
    </div>
  );
};

export default SidebarHeader;
