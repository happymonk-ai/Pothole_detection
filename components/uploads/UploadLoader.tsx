import styles from "./loader.module.scss";

const UploadLoader = () => {
  return (
    <div className={styles.loader}>
      <svg className={styles.circular}>
        <circle
          className={styles.path}
          cx="100"
          cy="100"
          r="50"
          fill="none"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  );
};

export default UploadLoader;
