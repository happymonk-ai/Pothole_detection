import Image from "next/image";
import { FC } from "react";
import styles from "./index.module.scss";
import common_styles from "../../../../styles/common.module.scss";
import { images } from "../../../../constants/images";

export enum CategoryTypes {
  low = "Low",
  moderate = "Moderate",
  high = "High",
}

type TBoxProps = {
  type: CategoryTypes;
  amount: string | number;
  handleClick: () => void;
  highlight: boolean;
};

const CategoryBox: FC<TBoxProps> = ({
  type,
  amount,
  handleClick,
  highlight,
}) => {
  const image =
    type === CategoryTypes.high
      ? images.high
      : type === CategoryTypes.moderate
      ? images.moderate
      : images.low;
  return (
    <div
      className={`${styles.box} ${highlight && styles.highlight_box}`}
      onClick={handleClick}
    >
      <Image src={image} alt="" className={styles.image} />
      <h1
        className={`${styles.type} ${common_styles.category_type}  ${
          styles[`${type.toLowerCase()}`]
        }`}
      >
        {type}
      </h1>
      <h2 className={`${styles.amount}  ${common_styles.category_type}`}>
        {amount}
      </h2>
    </div>
  );
};

export default CategoryBox;
