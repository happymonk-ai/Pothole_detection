import Image from "next/image";
import { useState } from "react";
import { images } from "../../constants/images";
import styles from "./index.module.scss";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const style = isExpanded ? styles.container_expanded : styles.container;
  return (
    <div className={style}>
      <div className={styles.left} onClick={handleExpand}>
        <Image src={images.search} alt="" className={styles.icon} />
      </div>

      <div className={styles.right}>
        <input type="text" className={styles.text_box} placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
