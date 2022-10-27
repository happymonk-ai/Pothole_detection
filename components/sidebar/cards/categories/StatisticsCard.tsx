import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../../../constants/images";
import { formatType } from "../../../../helpers";
import { setHighlighted } from "../../../../redux/modules/slices/detectionsSlice";
import { filterDetections } from "../../../../redux/modules/slices/mapSlice";
import { RootState } from "../../../../redux/store";
import CategoryBox, { CategoryTypes } from "./CategoryBox";
import styles from "./index.module.scss";

const StatisticsCard = () => {
  const { highlighted } = useSelector((state: RootState) => state.detections);
  const { all_potholes, severity } = useSelector(
    (state: RootState) => state.map
  );

  const dispatch = useDispatch();
  const highlightBox = (type: CategoryTypes | string) => {
    dispatch(setHighlighted(type));

    const filtered = all_potholes.filter((el) => {
      if (el?.properties?.severity?.type) {
        const _type = formatType(el?.properties?.severity?.type);
        if (type === CategoryTypes.moderate) {
          return _type === "Medium";
        }
        return _type === type;
      }
    });

    if (filtered) {
      dispatch(filterDetections(filtered || []));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Image src={images.pothole} alt="" />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>Number of Potholes in this area:</h1>
          <h2 className={styles.number}>{severity?.total}</h2>
        </div>
      </div>
      <div className={styles.bottom}>
        <CategoryBox
          amount={severity?.high}
          type={CategoryTypes.high}
          handleClick={() => highlightBox(CategoryTypes.high)}
          highlight={highlighted == CategoryTypes.high}
        />
        <CategoryBox
          amount={severity?.moderate}
          type={CategoryTypes.moderate}
          handleClick={() => highlightBox(CategoryTypes.moderate)}
          highlight={highlighted == CategoryTypes.moderate}
        />
        <CategoryBox
          amount={severity?.low}
          type={CategoryTypes.low}
          handleClick={() => highlightBox(CategoryTypes.low)}
          highlight={highlighted == CategoryTypes.low}
        />
      </div>
    </div>
  );
};

export default StatisticsCard;
