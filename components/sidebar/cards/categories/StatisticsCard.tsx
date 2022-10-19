import Image from "next/image";
import { useState } from "react";
import { images } from "../../../../constants/images";
import CategoryBox, { CategoryTypes } from "./CategoryBox";
import styles from "./index.module.scss";

const StatisticsCard = () => {
  const [highLighted, setHighLighted] = useState<string | CategoryTypes>("");

  const highlightBox = (type: CategoryTypes) => {
    setHighLighted(type);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Image src={images.pothole} alt="" />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>Number of Potholes in this area:</h1>
          <h2 className={styles.number}>2312</h2>
        </div>
      </div>
      <div className={styles.bottom}>
        <CategoryBox
          amount="1234"
          type={CategoryTypes.high}
          handleClick={() => highlightBox(CategoryTypes.high)}
          highlight={highLighted === CategoryTypes.high}
        />
        <CategoryBox
          amount="1234"
          type={CategoryTypes.moderate}
          handleClick={() => highlightBox(CategoryTypes.moderate)}
          highlight={highLighted === CategoryTypes.moderate}
        />
        <CategoryBox
          amount="1234"
          type={CategoryTypes.low}
          handleClick={() => highlightBox(CategoryTypes.low)}
          highlight={highLighted === CategoryTypes.low}
        />
      </div>
    </div>
  );
};

export default StatisticsCard;
