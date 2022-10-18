// import Map from "../components/map/Map";
import MapInfo from "../components/map/cards/MapInfo";
import Map from "../components/map/Map";
import styles from "./index.module.scss";

const DashboardLayout = () => {
  return (
    <div className={styles.dashboard_layout}>
      <div className={styles.map_content}>
        <Map />
      </div>
      <div className={styles.data_content}>
        <div className={styles.left_side}>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.search_bar}></div>
              <div className={styles.videos}></div>
            </div>
            <div className={styles.right}>
              <div className={styles.map_info}>
                <MapInfo />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_side}></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
