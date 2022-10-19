import { FC } from "react";
import styles from "./index.module.scss";

export type TDetailProp = {
  name: string;
  amount: string;
  unit?: boolean;
};

type TDetailsProps = {
  values: Array<TDetailProp>;
};

const Details: FC<TDetailsProps> = ({ values }) => {
  return (
    <div className={styles.bottom}>
      {values.map(({ name, amount, unit }) => (
        <div className={styles.detail} key={Math.random()}>
          <h1 className={styles.title}>{name}</h1>
          <div className={styles.details_container}>
            <h2 className={styles.amount}>{amount}</h2>
            {unit && <span className={styles.unit}>units/sq.area</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
