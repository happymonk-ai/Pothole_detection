import Tooltip from "react-tooltip";
import styles from "./index.module.scss";

const BigToolTip = () => {
  return (
    <div>
      <button
        data-tip
        data-for="registerTip"
        data-border-class={styles.tooltip_border}
        data-border="true"
        // data-delay-hide={200000}
      >
        Register
      </button>

      <Tooltip
        id="registerTip"
        place="top"
        effect="solid"
        className={styles.tooltip}
        clickable
      >
        <div className={styles.big_tooltip_content}>
          <div className={styles.info}>
            <h1 className={styles.sub_header}>Number of potholes :</h1>
            <p className={styles.text}>62</p>
          </div>
          <div className={styles.info}>
            <h1 className={styles.sub_header}>Start Point :</h1>
            <p className={styles.text}>
              17th Main Rd, 3rd Block, Sardar Patel Rd. (1728.1557, N,
              07820.9433, E)
            </p>
          </div>
          <div className={styles.info}>
            <h1 className={styles.sub_header}>End Point :</h1>
            <p className={styles.text}>
              30th Main Rd, 3rd Block, Sardar Patel Rd. (1728.1557, N,
              07820.9433, E)
            </p>
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

export default BigToolTip;
