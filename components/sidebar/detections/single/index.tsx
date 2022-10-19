import Image from "next/image";
import { FC } from "react";
import { images } from "../../../../constants/images";
import { TDetection } from "../../../../redux/modules/actions/detectionsSlice";
import { CategoryTypes } from "../../cards/categories/CategoryBox";
import SidebarHeader from "../../header";
import styles from "./index.module.scss";
import InfoBox, { infoBoxtypes } from "./InfoBox";
import InfoCard from "./InfoCard";
import VideoCards from "./VideoCards";

type TDetailsProps = {
  detection: TDetection;
};

const DetectionDetails: FC<TDetailsProps> = ({ detection }) => {
  const icon =
    detection?.type === CategoryTypes.high
      ? images[`high_icon`]
      : detection?.type === CategoryTypes.low
      ? `low_icon`
      : `moderate_icon`;

  return (
    <div className={styles.container}>
      <SidebarHeader />
      <div className={styles.top}>
        <Image src={icon} alt="" className={styles.icon} />
        <h2 className={styles.title}>Pothole detected on Sardar Patel Road</h2>
      </div>
      <div className={styles.bottom}>
        <VideoCards />
        <InfoCard
          surface="123412.78 mm sq"
          location={{
            road: "Sardar Patel Road",
            coordinates: `11728.1379, N, 
            07820.9428, E `,
          }}
          severity={detection.type}
        />
        <div className={styles.info_boxes}>
          <InfoBox type={infoBoxtypes.perimeter} info="1234.78 mm " />
          <InfoBox type={infoBoxtypes.length} info="136.80mm" />
          <InfoBox type={infoBoxtypes.width} info="90.20 mm" />
        </div>
      </div>
    </div>
  );
};

export default DetectionDetails;
