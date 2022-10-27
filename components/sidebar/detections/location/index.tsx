import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LocationCards = () => {
  const LocationCard = dynamic(() => import("./LocationCard"));
  const { potholes } = useSelector((state: RootState) => state.map);
  return (
    <div className={styles.locations}>
      {potholes?.map((detection: any) => (
        <Suspense fallback={<div>Loading</div>} key={Math.random()}>
          <LocationCard key={Math.random()} {...detection?.properties} />
        </Suspense>
      ))}
    </div>
  );
};

export default LocationCards;
