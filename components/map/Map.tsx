import { Ref, useRef } from "react";
import MapGL from "react-map-gl";
import MapZoomControls from "./controls/Zoom";
import styles from "./index.module.scss";
// import styles from "./index.module.scss";

const Map = () => {
  const zoom = 1;

  const mapRef: Ref<any> = useRef(null);

  const handleZoomIn = () => {
    mapRef?.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapRef?.current?.zoomOut();
  };

  return (
    <div className={styles.map_content}>
      <MapGL
        ref={mapRef}
        style={{ width: "100%", height: "100%" }}
        styleDiffing
        reuseMaps
        mapStyle="mapbox://styles/rishfromhappymonk/cl0t5b4db001i15polhxjnx9m?optimize=true"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          zoom: zoom,
        }}
      ></MapGL>
      <MapZoomControls handleIn={handleZoomIn} handleOut={handleZoomOut} />
    </div>
  );
};

export default Map;
