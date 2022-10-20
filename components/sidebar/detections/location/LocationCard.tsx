import Image from "next/image";
import React, { FC } from "react";
import { images } from "../../../../constants/images";
import { CategoryTypes } from "../../cards/categories/CategoryBox";
import styles from "./index.module.scss";
import common_tyles from "../../../../styles/common.module.scss";
import VideoCards from "../videos";
import {
  setDetailView,
  setDetection,
  TDetection,
} from "../../../../redux/modules/actions/detectionsSlice";
import { useDispatch } from "react-redux";

export interface IDetectionsCardProps {
  data: Array<{
    type: CategoryTypes;
    name: string;
    coordinates: string;
    time: string;
    videos?: Array<{
      url: string;
    }>;
  }>;
}

const LocationCard: FC<IDetectionsCardProps> = ({ data }) => {
  const dispatch = useDispatch();

  const handleDetection = (detection: TDetection) => {
    dispatch(setDetection(detection));
    dispatch(setDetailView(true));
  };
  return (
    <React.Fragment>
      {data.map(({ name, time, type, coordinates }) => (
        <div className={styles.container} key={Math.random()}>
          <div className={styles.left}>
            <Image
              src={
                images[
                  `${
                    type === CategoryTypes.high
                      ? "high_icon"
                      : type === CategoryTypes.moderate
                      ? "moderate_icon"
                      : "low_icon"
                  }`
                ]
              }
              alt=""
            />
          </div>
          <div className={styles.right}>
            <div
              className={styles.top}
              onClick={() =>
                handleDetection({
                  name,
                  type,
                  time,
                  coordinates,
                })
              }
            >
              <div className={styles.heading}>
                <h2 className={styles.title}>{name}</h2>
                <span className={styles.time}>{time}</span>
              </div>
              <div className={styles.detail}>
                <div className={styles.left}>
                  <Image src={images.location_pin} alt="" />
                  <span className={styles.coordinates}>{coordinates}</span>
                </div>
                <div className={styles.right}>
                  <span
                    className={`${styles.type} ${
                      common_tyles[`${type.toLocaleLowerCase()}_color`]
                    }`}
                  >
                    {type}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.back}></div>
              <VideoCards />
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default LocationCard;
