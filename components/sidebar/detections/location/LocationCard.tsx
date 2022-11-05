import Image from "next/image";
import React, { FC, useCallback } from "react";
import { images } from "../../../../constants/images";
import { CategoryTypes } from "../../cards/categories/CategoryBox";
import styles from "./index.module.scss";
import common_tyles from "../../../../styles/common.module.scss";
import VideoCards from "../videos";
import {
  setDetailView,
  setDetection,
} from "../../../../redux/modules/slices/detectionsSlice";
import { useDispatch } from "react-redux";
import Moment from "react-moment";
import { formatType } from "../../../../helpers";
import { setMove } from "../../../../redux/modules/slices/mapSlice";

export interface IDetectionsCardProps {
  severity: {
    type: CategoryTypes | string;
    value: number;
  };
  name: string;
  geo: {
    lon: string;
    lat: string;
  };
  id?: number;
  length?: number;
  width?: number;
  surfaceArea?: number;
  perimeter?: number;
  timestamp?: string;
  frames?: string[];
  videos?: Array<{
    url: string;
  }>;
}

const LocationCard: FC<IDetectionsCardProps> = ({
  name = "Unknon",
  timestamp,
  severity,
  geo,
  id,
  length,
  width,
  surfaceArea,
  perimeter,
  frames,
}) => {
  const dispatch = useDispatch();

  const handleDetection = (detection: IDetectionsCardProps) => {
    dispatch(setDetection(detection));
    dispatch(setDetailView(true));
  };

  const handleClick = useCallback(() => {
    dispatch(
      setMove({
        longitude: Number(geo?.lon[0] || 0),
        latitude: Number(geo?.lat[0] || 0),
      })
    );

    handleDetection({
      name,
      frames,
      severity,
      timestamp,
      id,
      length,
      width,
      surfaceArea,
      perimeter,
      geo: {
        lon: (geo?.lon && geo?.lon[0]) || "",
        lat: (geo?.lat && geo?.lat[0]) || "",
      },
    });
  }, []);

  return (
    <React.Fragment>
      <div
        className={styles.container}
        key={Math.random()}
        onClick={handleClick}
      >
        <div className={styles.left}>
          <Image
            src={
              formatType(severity.type) == CategoryTypes.high
                ? images.high_icon
                : formatType(severity.type) == CategoryTypes.low
                ? images.low_icon
                : images.moderate_icon
            }
            priority={true}
            alt=""
          />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.heading}>
              <h2 className={styles.title}>{name} Road</h2>
              <span className={styles.time}>
                <Moment
                  format="HH:MM A z"
                  date={timestamp ? timestamp[1] : 0}
                  utc
                  local
                />
              </span>
            </div>
            <div className={styles.detail}>
              {geo?.lon?.length && geo?.lat?.length ? (
                <div className={styles.left}>
                  <Image src={images.location_pin} alt="" priority={true} />

                  <span
                    className={styles.coordinates}
                  >{`${geo?.lon[0]},N, ${geo?.lat[0]},E`}</span>
                </div>
              ) : null}

              <div className={styles.right}>
                <span
                  className={`${styles.type} ${
                    common_tyles[`${severity?.type?.toLowerCase()}_color`]
                  }`}
                >
                  {severity?.type}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.back}></div>
            <VideoCards
              frames={frames}
              // frames={(frames?.length && frames) || generateRandomImages()}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LocationCard;
