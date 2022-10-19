import Image from "next/image";
import { images } from "../../../constants/images";
import styles from "./index.module.scss";
import common_styles from "../../../styles/common.module.scss";
import { useDispatch } from "react-redux";
import { setSidebarShareIsOpen } from "../../../redux/modules/actions/sidebarShareSlice";

const SidebarHeader = () => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setSidebarShareIsOpen(true));
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.left} ${common_styles.sidebar_main_header}`}>
        Potholes Metrics
      </div>
      <div className={styles.right}>
        <Image
          src={images.share_green}
          alt=""
          onClick={handleOpen}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
