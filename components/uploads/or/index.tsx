import styles from "./index.module.scss";

const OrSeparator = () => {
  return (
    <div className={styles.separator}>
      <span className={`${styles.or_text} ${styles.gray_title}`}>Or</span>
    </div>
  );
};

export default OrSeparator;
