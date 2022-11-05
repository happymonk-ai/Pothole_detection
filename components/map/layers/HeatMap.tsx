import { Layer, Source } from "react-map-gl";
import { heatmapLayer } from "./heat_map_layer";

const HeatMapLayer = ({ data }: { data: any }) => {
  return (
    <Source type="geojson" data={data}>
      <Layer {...heatmapLayer} />
    </Source>
  );
};

export default HeatMapLayer;
