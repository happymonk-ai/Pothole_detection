import MapGL from "react-map-gl";

const Map = () => {
  const zoom = 1;
  return (
    <MapGL
      style={{ width: "100%", height: "100%" }}
      styleDiffing
      reuseMaps
      mapStyle="mapbox://styles/rishfromhappymonk/cl0t5b4db001i15polhxjnx9m?optimize=true"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        zoom: zoom,
      }}
    ></MapGL>
  );
};

export default Map;
