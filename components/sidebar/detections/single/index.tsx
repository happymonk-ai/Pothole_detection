import Image from "next/image";
import { useSelector } from "react-redux";
import { images } from "../../../../constants/images";
import { formatType } from "../../../../helpers";
import { RootState } from "../../../../redux/store";
import { CategoryTypes } from "../../cards/categories/CategoryBox";
import SidebarHeader from "../../header";
import { IDetectionsCardProps } from "../location/LocationCard";
import styles from "./index.module.scss";
import InfoBox, { infoBoxtypes } from "./InfoBox";
import InfoCard from "./InfoCard";
import VideoCards from "./VideoCards";

const DetectionDetails = () => {
  const { isDetailView, detection } = useSelector(
    (state: RootState) => state.detections
  );

  const {
    name = "Unknon",
    severity,
    geo,
    surfaceArea,
    perimeter,
    length,
    width,
    frames,
  }: IDetectionsCardProps = detection;

  return (
    (isDetailView && (
      <div className={styles.container}>
        <SidebarHeader />
        <div className={styles.top}>
          <Image
            src={
              formatType(severity?.type) == CategoryTypes.high
                ? images.high_icon
                : formatType(severity?.type) == CategoryTypes.low
                ? images.low_icon
                : images.moderate_icon
            }
            alt=""
            className={styles.icon}
            priority={true}
          />
          <h2 className={styles.title}>Pothole detected on {name} Road</h2>
        </div>
        <div className={styles.bottom}>
          <VideoCards frames={frames || []} />
          <InfoCard
            surface={`${Math.round(surfaceArea || 0)} mm sq`}
            location={{
              road: name,
              coordinates: `${geo?.lon}, N, 
       ${geo?.lat}, E `,
            }}
            severity={severity}
          />
          <div className={styles.info_boxes}>
            <InfoBox
              type={infoBoxtypes.perimeter}
              info={`${Math.round(perimeter || 0)} mm `}
            />
            <InfoBox
              type={infoBoxtypes.length}
              info={`${Math.round(length || 0)}mm`}
            />
            <InfoBox
              type={infoBoxtypes.width}
              info={`${Math.round(width || 0)} mm`}
            />
          </div>
        </div>
      </div>
    )) ||
    null
  );
};

export default DetectionDetails;
