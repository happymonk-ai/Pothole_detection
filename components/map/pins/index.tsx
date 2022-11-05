import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { Marker } from "react-map-gl";

interface IPinProps {
  icon: StaticImageData;
  location: {
    longitude: number;
    latitude: number;
  };
}
const MapPin: FC<IPinProps> = ({ icon, location }) => {
  return (
    <Marker
      key={Math.random()}
      longitude={Number(location.longitude)}
      latitude={Number(location.latitude)}
      anchor="top"
    >
      <Image src={icon} alt="" width={100} height={200} />
    </Marker>
  );
};

export default MapPin;
