import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import StatisticsCard from "./cards/categories/StatisticsCard";
import RegionStats from "./cards/region/RegionStats";
import Detections from "./detections";
import SidebarHeader from "./header";

const DefaultSidebarView = () => {
  const { potholes } = useSelector((state: RootState) => state.map);
  const { isDetailView } = useSelector((state: RootState) => state.detections);

  const detections_date =
    (potholes?.length &&
      potholes[0]?.timestamp &&
      potholes[0]?.timestamp[1] != undefined &&
      potholes[0].timestamp[1]) ||
    new Date(Date.now());

  return (
    (!isDetailView && (
      <div>
        <SidebarHeader />
        <StatisticsCard />
        <RegionStats />
        <Detections date={detections_date} />
      </div>
    )) ||
    null
  );
};
export default DefaultSidebarView;
