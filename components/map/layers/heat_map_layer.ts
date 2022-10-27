import type { HeatmapLayer } from "react-map-gl";

const MAX_ZOOM_LEVEL = 18;

export const heatmapLayer: HeatmapLayer = {
    id: "heatmap",
    maxzoom: MAX_ZOOM_LEVEL,
    type: "heatmap",

    paint: {
        // Increase the heatmap weight based on frequency and property magnitude
        "heatmap-weight": ["interpolate", ["linear"], ["get", "mag"], 0, 0, 6, 1],
        // Increase the heatmap color weight weight by zoom level
        // heatmap-intensity is a multiplier on top of heatmap-weight
        "heatmap-intensity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            1,
            MAX_ZOOM_LEVEL,
            1
        ],
        // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
        // Begin color ramp at 0-stop with a 0-transparancy color
        // to create a blur-like effect.
        "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0,
            "rgba(33,102,172,0)",
            0.2,
            "rgb(23,57,97)",
            0.4,
            "rgb(49,177,30)",
            0.6,
            "rgb(191,222,20)",
            0.8,
            "rgb(241,108,3)",
            1,
            "rgb(215, 63, 53)"
        ],
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            5,
            MAX_ZOOM_LEVEL,
            20
        ],
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 0, 1, 22, 1]
    }
};