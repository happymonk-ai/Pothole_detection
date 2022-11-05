import Image from "next/image";
import { useDispatch } from "react-redux";
import { images } from "../../constants/images";
import { openUploader } from "../../redux/modules/slices/uploaderSlice";
import styles from "./index.module.scss";

const Uploader = () => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(openUploader(true));
  };

  return (
    <div className={styles.uploader} onClick={handleOpen}>
      <Image
        src={images.upload}
        alt=""
        className={styles.icon}
        width={22}
        height={22}
        priority={true}
      />
    </div>
  );
};

export default Uploader;
