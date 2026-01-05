import ColorRamp from "@arcgis/core/ColorRamp.js";
import RasterStretchRenderer from "@arcgis/core/renderers/RasterStretchRenderer.js";
import * as rasterColorRamps from "@arcgis/core/smartMapping/raster/support/colorRamps.js";

const ROCKFALL_LAYER_ITEM_ID = "093117efdd044aa0ae99c16e2f918922"
const DEBRISF_LAYER_ITEM_ID = "f6a548dcae7145dbad1f77a285f192f6"
const NDVI_LAYER_ITEM_ID = "daa0a40dbeb04d60af56d239dd592e8c"
const LST_LAYER_ITEM_ID = "5557e9f89df349809d212d54066ccbeb"
const SMOKE_LAYER_ITEM_ID = "02019d71f4e04a22851fb60cc2b076c2"
const FUELBREAKS_LAYER_ITEM_ID = "b7d65560b3514835a47fe541ef31bfb3"
const FUELMNG_LAYER_ITEM_ID = "b9421a66f7104e47886395fc70e61270"
const RISKCLS_LAYER_ITEM_ID = "1533a455f7e84c4d916c951a155f797d"
const THREATCLS_LAYER_ITEM_ID = "006ca2c7ecb2464d9b14eeafa1ea1bbc"


const spectral_cont = rasterColorRamps.byName("Spectral (Continuous)");
const colorRamp = new ColorRamp({
    type: "algorithmic", // Or "multipart" depending on the scheme structure
    // Use the colors from the retrieved preset scheme
    colors: presetScheme.colors.map(c => c.color) 
});

// 3b. Create the RasterStretchRenderer
const smokeRenderer = new RasterStretchRenderer({
    // Assign the new ColorRamp
    colorRamp: colorRamp,
    // Specify the stretch type (e.g., "min-max", "standard-deviation", "percent-clip")
    stretchType: "min-max", 
    // You may also want to set min/max values or other properties
    min: 0, 
    max: 114 

  const smokeLayer = new ImageryTileLayer({
    portalItem: { id: SMOKE_LAYER_ITEM_ID },
    renderer: smokeRenderer,
    visible: true,
    title: "Flood hazard"
  });


  // Esri color ramps - Starburst
const starburst = ["#ec8787ff", "#f9cbb3ff", "#fff0d0ff", "#b7d5d7ff", "#70b6baff"];
// Esri color ramps - Red 1
const reds1 = ["#f6d7e0ff", "#e6968eff", "#db6a58ff", "#a1412cff"];