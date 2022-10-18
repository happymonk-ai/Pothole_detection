import styles from "./index.module.scss";

interface ICategory {
  name: string;
  color: string;
}

const MapInfo = () => {
  const categories: Array<ICategory> = [
    {
      name: "Low",
      color: "low",
    },
    {
      name: "Moderate",
      color: "moderate",
    },
    {
      name: "High",
      color: "high",
    },
  ];
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Map Info</h3>
      <div className={styles.content}>
        <p className={styles.description}>
          The layer aggregates data within the boundary area.
        </p>
        <div className={styles.categories}>
          {categories.map(({ name, color }) => (
            <div key={Math.random()} className={styles.status}>
              <div className={styles[color]}></div>
              <h3 className={styles.name}>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapInfo;
