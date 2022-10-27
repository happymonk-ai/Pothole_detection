import { Popup } from "react-map-gl";
// import styles from "./index.module.scss";

// interface popupProps {
//   locations: Array<{
//     longitude: string;
//     latitude: string;
//     state: string;
//   }>;
// }
const MapPopup = ({ locations }: { locations: any }) => {
  return (
    locations && (
      <div>
        {locations?.map((location: any) => (
          <div key={Math.random()}>
            <Popup
              closeOnClick={false}
              anchor="bottom"
              longitude={Number(location.longitude)}
              latitude={Number(location.latitude)}
              className="map-popup"
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                color: "#56CCF22",
              }}
            >
              <div>{location?.state}</div>
            </Popup>
          </div>
        ))}
      </div>
    )
  );
};

export default MapPopup;
