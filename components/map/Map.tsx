import { Ref, useCallback, useEffect, useRef } from "react";
import Map, { Layer, Source } from "react-map-gl";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import MapZoomControls from "./controls/Zoom";
import styles from "./index.module.scss";
import { heatmapLayer } from "./layers/heat_map_layer";

const MapContainer = () => {
  const zoom = 1;

  const mapRef: Ref<any> = useRef(null);

  const handleZoomIn = () => {
    mapRef?.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapRef?.current?.zoomOut();
  };
  const { move, potholes } = useSelector((state: RootState) => state.map);
  const handleMoveTo = () => {
    mapRef?.current?.easeTo({
      center: [move?.longitude, move?.latitude],
      essential: true,
      zoom: 20,
      duration: 600,
    });
  };

  const handleMove = useCallback(() => handleMoveTo(), [move?.latitude]);

  useEffect(() => {
    handleMove();
  }, [move?.latitude]);

  return (
    <div className={styles.map_container}>
      <Map
        ref={mapRef}
        style={{ width: "100%", height: "100%" }}
        styleDiffing
        reuseMaps
        mapStyle="mapbox://styles/rishfromhappymonk/cl0t5b4db001i15polhxjnx9m?optimize=true"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          zoom: zoom,
          latitude: 40,
          longitude: -100,
          bearing: 0,
          pitch: 0,
        }}
        maxBounds={[
          [75.362954, 15.125563],
          [83.27311, 19.052129],
        ]}
      >
        <Source
          type="geojson"
          data={{
            type: "FeatureCollection",
            features: [...potholes],
          }}
        >
          <Layer {...heatmapLayer} />
        </Source>
        <MapZoomControls handleIn={handleZoomIn} handleOut={handleZoomOut} />
      </Map>
    </div>
  );
};

export default MapContainer;
