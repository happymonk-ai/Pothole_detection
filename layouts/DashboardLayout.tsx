import Map from "../components/map/Map";
import MapInfo from "../components/map/cards/MapInfo";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import DetectionDetails from "../components/sidebar/detections/single";
import Uploader from "../components/uploads";
import RecentVideos from "../components/videos/recent";
import { useEffect } from "react";
import { getMapData } from "../redux/modules/actions/uploads";
import DefaultSidebarView from "../components/sidebar/DefaultSidebarView";

const DashboardLayout = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getMapData());
  }, []);

  return (
    <div className={styles.dashboard_layout}>
      <Map />
      <div className={styles.data_content}>
        <div className={styles.left_side}>
          <div className={styles.content}>
            <div className={styles.left}>
              {/* <div className={styles.search_bar_container}>
                <SearchBar />
              </div> */}
              <Uploader />
              <div className={styles.videos}>
                <RecentVideos />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.map_info}>
                <MapInfo />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_side}>
          <div className={styles.detailsView}>
            <DetectionDetails />
          </div>
          <DefaultSidebarView />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
