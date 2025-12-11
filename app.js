// RMOW hazard viewer styled to match static map
// Uses AGOL items directly, no API key, for public content.

const BASEMAP_ITEM_ID        = "16ccd4ff9fe3428690c776202ff4a5c7";
const FLOOD_LAYER_ITEM_ID    = "c14e543a2a8944b6aba17b589e2d532b";
const NEIGHBOURHOOD_ITEM_ID  = "eaaf9354f8ce4c8588e29f1137667cde"; // sublayer 12
const FLOOD_OUTLINE_ITEM_ID  = "39c5ebf72e18404eb39e6cf8399e3f0c";

require([
  "esri/config",
  "esri/WebMap",
  "esri/layers/ImageryTileLayer",
  "esri/layers/FeatureLayer",
  "esri/views/MapView",
  "esri/widgets/Legend",
  "esri/widgets/ScaleBar",
  "esri/widgets/Expand"
], function (
  esriConfig,
  WebMap,
  ImageryTileLayer,
  FeatureLayer,
  MapView,
  Legend,
  ScaleBar,
  Expand
) {
  // esriConfig.apiKey = "YOUR_API_KEY"; // only if you later add secured content

  // --- WebMap (basemap + existing AGOL layers) ---
  const webmap = new WebMap({
    portalItem: { id: BASEMAP_ITEM_ID }
  });

  // --- Flood hazard imagery: darker, opaque blue stretch ---

  const floodRenderer = {
    type: "raster-stretch",
    stretchType: "standard-deviation",
    numberOfStandardDeviations: 2,
    statistics: [{
      min: 0.00006103515625,
      max: 7.69512939453125,
      avg: 1.1509735879299638,
      stddev: 0.90648640678161641
    }],
    gamma: [0.6],
    colorRamp: {
      type: "algorithmic",
      fromColor: [198, 219, 239, 255], // lighter blue
      toColor:   [  8,  48, 107, 255], // deep blue
      algorithm: "lab-lch"
    }
  };

  const floodLayer = new ImageryTileLayer({
    portalItem: { id: FLOOD_LAYER_ITEM_ID },
    renderer: floodRenderer,
    opacity: 1,
    visible: true,
    title: "Flood hazard"
  });

  // --- Flood extent outline: transparent fill, thick outline ---

  const floodExtentLayer = new FeatureLayer({
    portalItem: { id: FLOOD_OUTLINE_ITEM_ID },
    title: "Flood extent outline",
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0],          // no fill
        outline: {
          color: [8, 48, 107, 1],     // deep blue outline
          width: 2
        }
      }
    },
    opacity: 1,
    popupEnabled: true
  });

  // --- Neighbourhoods: transparent fill, blue outline ---

  const neighbourhoodsLayer = new FeatureLayer({
    portalItem: { id: NEIGHBOURHOOD_ITEM_ID },
    layerId: 12,
    title: "Neighbourhoods",
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0],
        outline: {
          color: [30, 64, 175, 1],
          width: 1
        }
      }
    },
    opacity: 1,
    popupEnabled: true
  });

  // Add layers in desired order:
  //  - flood imagery
  //  - flood outline
  //  - neighbourhoods
  webmap.addMany([floodLayer, floodExtentLayer, neighbourhoodsLayer]);

  // --- View + widgets ---

  const view = new MapView({
    container: "viewDiv",
    map: webmap,
    popup: {
      dockEnabled: true,
      dockOptions: {
        position: "bottom-right",
        buttonEnabled: false
      }
    }
  });

  view.when().then(function () {
    const legend = new Legend({ view });
    const legendExpand = new Expand({
      view,
      content: legend,
      expanded: false,
      expandTooltip: "Legend"
    });
    view.ui.add(legendExpand, "top-left");

    const scaleBar = new ScaleBar({
      view,
      unit: "metric"
    });
    view.ui.add(scaleBar, "bottom-left");

    // Zoom to flood extent once it’s ready
    floodLayer.when().then(function () {
      if (floodLayer.fullExtent) {
        view.goTo(floodLayer.fullExtent.expand(1.1)).catch(() => {});
      }
    }).catch(function (error) {
      console.error("Flood layer failed to load:", error);
    });

    // Optional: explicitly confirm ordering
    webmap.when().then(function () {
      // Neighbourhoods on very top
      webmap.reorder(neighbourhoodsLayer, webmap.layers.length - 1);
      // Flood outline below neighbourhoods
      webmap.reorder(floodExtentLayer, webmap.layers.length - 2);
      // Flood raster below both
      webmap.reorder(floodLayer, webmap.layers.length - 3);
    });
  });

  // --- UI toggles ---

  const floodToggle = document.getElementById("floodToggle");
  if (floodToggle) {
    floodToggle.addEventListener("change", function (event) {
      floodLayer.visible = event.target.checked;
    });
  }

  const floodOutlineToggle = document.getElementById("floodOutlineToggle");
  if (floodOutlineToggle) {
    floodOutlineToggle.addEventListener("change", function (event) {
      floodExtentLayer.visible = event.target.checked;
    });
  }

  const nhToggle = document.getElementById("neighbourhoodToggle");
  if (nhToggle) {
    nhToggle.addEventListener("change", function (event) {
      neighbourhoodsLayer.visible = event.target.checked;
    });
  }
});
