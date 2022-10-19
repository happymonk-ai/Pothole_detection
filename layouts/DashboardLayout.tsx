// import Map from "../components/map/Map";
import MapInfo from "../components/map/cards/MapInfo";
import Map from "../components/map/Map";
import StatisticsCard from "../components/sidebar/cards/categories/StatisticsCard";
import RegionStats from "../components/sidebar/cards/region/RegionStats";
import Detections from "../components/sidebar/detections";
import SidebarHeader from "../components/sidebar/header";
import SearchBar from "../components/search/SearchBar";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import DetectionDetails from "../components/sidebar/detections/single";

const DashboardLayout = () => {
  const { isDetailView, detection } = useSelector(
    (state: RootState) => state.detections
  );
  return (
    <div className={styles.dashboard_layout}>
      <div className={styles.map_content}>
        <Map />
      </div>
      <div className={styles.data_content}>
        <div className={styles.left_side}>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.search_bar_container}>
                <SearchBar />
              </div>
              <div className={styles.videos}></div>
            </div>
            <div className={styles.right}>
              <div className={styles.map_info}>
                <MapInfo />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_side}>
          {(isDetailView && (
            <div className={styles.detailsView}>
              <DetectionDetails detection={detection} />
            </div>
          )) || (
            <div className={styles.listView}>
              <SidebarHeader />
              <StatisticsCard />
              <RegionStats />
              <Detections />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
