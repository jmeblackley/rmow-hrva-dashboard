// RMOW hazard viewer styled to match static map
// Uses AGOL items directly, no API key, for public content.

// const BASEMAP_ITEM_ID        = "16ccd4ff9fe3428690c776202ff4a5c7"; // Jamie's initial basemap
const BASEMAP_ITEM_ID         = "a7dd522d5f374ef3840d2dc35c83b7ea"; // Colin's for underlay
const OVERLAY_ITEM_ID         = "20e707c910c1493fa33818c4fe835f86"; // Merged overlay polygons
const WB_BOUNDARY_ITEM_ID     = "04ee7fab5a204ceebadfe539d66ce361";
const BUILDINGS_ITEM_ID       = "b302800be04844b485800c5997d74766";

const SMOKE_LAYER_ITEM_ID     = "02019d71f4e04a22851fb60cc2b076c2";
const ROCKFALL_LAYER_ITEM_ID  = "093117efdd044aa0ae99c16e2f918922";
const DEBRISF_LAYER_ITEM_ID   = "f6a548dcae7145dbad1f77a285f192f6";
const NDVI_LAYER_ITEM_ID      = "daa0a40dbeb04d60af56d239dd592e8c";
const LST_LAYER_ITEM_ID       = "5557e9f89df349809d212d54066ccbeb";
const FUELBREAKS_LAYER_ITEM_ID = "b7d65560b3514835a47fe541ef31bfb3";
const FUELMNG_LAYER_ITEM_ID   = "b9421a66f7104e47886395fc70e61270";
const RISKCLS_LAYER_ITEM_ID   = "1533a455f7e84c4d916c951a155f797d";
const THREATCLS_LAYER_ITEM_ID = "006ca2c7ecb2464d9b14eeafa1ea1bbc";
const FLOOD_LAYER_ITEM_ID     = "c14e543a2a8944b6aba17b589e2d532b";
const NEIGHBOURHOOD_ITEM_ID   = "eaaf9354f8ce4c8588e29f1137667cde"; // sublayer 12
const DIKES_LAYER_ITEM_ID     = "6ce26b152302474281495a081ee7e4b0";
const FLOOD_OUTLINE_ITEM_ID   = "39c5ebf72e18404eb39e6cf8399e3f0c";

// ---------------------------------------------------------------------------
//                      Points Layer Identifier
// ---------------------------------------------------------------------------
// The points group layer lives within the same feature service that hosts
// neighbourhoods and other municipal layers.  Its item ID is the same as
// NEIGHBOURHOOD_ITEM_ID (eaaf9354f8ce4c8588e29f1137667cde).  By using this
// identifier along with the appropriate layerId, we can add the points and
// facility layers to the map.  A previous attempt used the webmap ID
// (16ccd4ff9fe3428690c776202ff4a5c7), which prevented the features from
// loading; this patch corrects that mistake.
const POINTS_ITEM_ID = NEIGHBOURHOOD_ITEM_ID;

// ---------------------------------------------------------------------------
//                      Vulnerability Layer Identifier
// ---------------------------------------------------------------------------
// Dissemination‑area feature layer that stores census attributes. This ID
// corresponds to the AGOL item containing DA polygons with fields such as
// `_65_and_older` (percentage of seniors), `tempthresh_2021` (percent of
// buildings exceeding 29 °C LST) and other socioeconomic indicators.  We'll
// use this layer to create thematic vulnerability maps and a separate
// outline layer for pop‑ups.  See README/metadata for details.
const VULNERABILITY_LAYER_ITEM_ID = "c88b8529a6b04f0ab7c2ef06debdd1bc";

// Note: removed duplicate declaration of VULNERABILITY_LAYER_ITEM_ID to avoid redefinition.

// --- colour map definitions --- 
  // Esri color ramps - Starburst
const starburst = ["#ec8787ff", "#f9cbb3ff", "#fff0d0ff", "#b7d5d7ff", "#70b6baff"];
// Esri color ramps - Red 1
const reds1 = ["#f6d7e0ff", "#e6968eff", "#db6a58ff", "#a1412cff"];
// Esri color ramps - Blue and Red 10
const redblue10 = ["#d7191cff", "#fdae61ff", "#ffffbfff", "#abdda4ff", "#2b83baff"];
const bluered10 = ["#2b83baff", "#abdda4ff", "#ffffbfff", "#fdae61ff", "#d7191cff"  ];
const redblue = ["#a53217ff", "#d2987fff", "#fffee6ff", "#8897a2ff", "#10305eff"];
// const inferno = ["#010005ff", "#1c0f4bff", "#520d8eff", "#881b9eff", "#bc2e9aff", "#f04188ff", "#ff5c6aff", "#ff8345ff", "#ffb71bff", "#fff415ff", "#ffff64ff", "#ffffe1ff", "#ffffebff"];
const inferno = ["#520d8eff", "#bc2e9aff", "#ff5c6aff", "#ffb71bff", "#ffff64ff"];

const rockfall = ["#f9eedd00", "#dea183ff", "#cd7C58ff", "#ba5632ff"]
// const debris = ["#a297b300", "#9f8cbdff", "#9b81c6ff", "#9876d0ff", "#946bd9ff", "#9060cfff", "#8d55ecff", "#894af6ff", "#853fffff", "#a46fbfff", "#c29f80ff", "#e0cf40ff", "#ffff00ff"];
// Esri color ramps - Viridis
// const debris = ["#6730a4ff", "#6058beff", "#507dc9ff", "#419ecbff", "#35bdcbff", "#2cdcc6ff", "#3bfbb6ff", "#6fff99ff", "#b9ff6eff", "#ffff37ff"];
const debris = ["#44015400", "#48247540", "#41448780", "#355f8dbf", "#2a788eff", "#21918cff", "#22a884ff", "#44bf70ff", "#7ad151ff", "#bddf26ff", "#fde725ff"];
const dry = ["#543005ff", "#8c510aff", "#bf812dff", "#dfc27dff", "#f6e8c3ff", "#f5f5f500", "#c7eae5ff", "#80cdc1ff", "#35978fff", "#01665eff", "#003c30ff"];

// Sequential five‑class palettes for vulnerability layers (light → dark)
// These palettes are derived from ColorBrewer (https://colorbrewer2.org/) and
// provide consistent hues across different categories. Each array contains
// five colours, corresponding to the five classes produced by the quantile
// breaks in vulnerabilityConfigs.
const palPurples5 = ["#f2f0f7", "#cbc9e2", "#9e9ac8", "#756bb1", "#54278f"]; // seniors
const palBlues5   = ["#eff3ff", "#bdd7e7", "#6baed6", "#3182bd", "#08519c"]; // children
const palReds5    = ["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"]; // low income
const palGreens5  = ["#edf8e9", "#bae4b3", "#74c476", "#31a354", "#006d2c"]; // living alone
const palOranges5 = ["#feedde", "#fdbe85", "#fd8d3c", "#e6550d", "#a63603"]; // renters


require([
  "esri/config",
  "esri/WebMap",
  "esri/layers/ImageryTileLayer",
  "esri/layers/ImageryLayer",
  "esri/layers/FeatureLayer",
  "esri/renderers/RasterStretchRenderer",
  "esri/rest/support/AlgorithmicColorRamp",
  "esri/rest/support/MultipartColorRamp",
  "esri/smartMapping/raster/support/colorRamps",
  "esri/Color",
  "esri/views/MapView",
  "esri/widgets/Legend",
  "esri/widgets/ScaleBar",
  "esri/widgets/Expand",
  "esri/widgets/Feature"
], function (
  esriConfig,
  WebMap,
  ImageryTileLayer,
  ImageryLayer,
  FeatureLayer,
  RasterStretchRenderer,
  AlgorithmicColorRamp,
  MultipartColorRamp,
  colorRamps,
  Color,
  MapView,
  Legend,
  ScaleBar,
  Expand,
  Feature
) {
  // esriConfig.apiKey = "YOUR_API_KEY"; // only if you later add secured content

  // --- WebMap (basemap + existing AGOL layers) ---
  const webmap = new WebMap({
    portalItem: { id: BASEMAP_ITEM_ID }
  });


// ============================================================================
//                          FUNCTIONS
// ============================================================================
  // Helper functions for custom colour ramps and raster renderers remain unchanged.
  /**
   * Creates a MultipartColorRamp from a flat array of hex color codes, with optional positions.
   * @param {string[]} colorHexCodes - An array of hex color strings.
   * @param {number[]} [ratios] - Optional array of ratios (0.0 to 1.0) defining color positions.
   * @returns {MultipartColorRamp | null}
   */
  function createManualMultipartColorRamp(colorHexCodes, ratios) {
      if (!colorHexCodes || colorHexCodes.length < 2) {
          console.error("Multipart color ramp requires at least two colors.");
          return null;
      }

      if (ratios && ratios.length !== colorHexCodes.length) {
          console.error("If ratios are provided, the count must match the color count.");
          return null;
      }

      const segments = [];

      // Create a segment (AlgorithmicColorRamp) between every consecutive pair of colors.
      for (let i = 0; i < colorHexCodes.length - 1; i++) {
          const fromColor = new Color(colorHexCodes[i]);
          const toColor = new Color(colorHexCodes[i + 1]);
          
          const segment = new AlgorithmicColorRamp({
              algorithm: "cie-lab", 
              fromColor: fromColor,
              toColor: toColor
          });

          // Case 1: Custom Ratios provided. Use the ratio/colorRamp structure.
          if (ratios) {
              segments.push({
                  colorRamp: segment,
                  // The ratio where this segment STARTS (must match the index of the start color)
                  ratio: ratios[i] 
              });
          } 
          // Case 2: No Ratios provided. Just push the segment. The API assumes even spacing.
          else {
              segments.push(segment);
          }
      }

      return new MultipartColorRamp({
          colorRamps: segments
      });
  }

  /**
   * Creates a RasterStretchRenderer using the 'min-max' stretch type.
   * @param {number} min - The data value that maps to 0% (start) of the color ramp.
   * @param {number} max - The data value that maps to 100% (end) of the color ramp.
   * @param {Object} colorRamp - The ColorRamp object (e.g., from createManualMultipartColorRamp).
   * @returns {RasterStretchRenderer}
   */
  function createMinMaxRenderer(min, max, colorRamp) {
      return new RasterStretchRenderer({
          stretchType: "min-max",
          statistics: [{
            min: min,
            max: max,
            avg: 0.0,
            stddev: 0.0,
          }],
          colorRamp: colorRamp,
          dynamicRangeAdjustment: false // Usually set to false when min/max are explicitly defined
      });
  }

  /**
   * Creates a RasterStretchRenderer using the 'percent-clip' stretch type.
   * @param {number} minPercent - The percentage of low values to clip (0 to 100).
   * @param {number} maxPercent - The percentage of high values to clip (0 to 100).
   * @param {Object} colorRamp - The ColorRamp object.
   * @returns {RasterStretchRenderer}
   */
  function createPercentClipRenderer(minPercent, maxPercent, colorRamp) {
      return new RasterStretchRenderer({
          stretchType: "percent-clip",
          minPercent: minPercent,
          maxPercent: maxPercent,
          colorRamp: colorRamp,
          dynamicRangeAdjustment: false // Recommended to be false for consistent percentage clips
      });
  }

  // ---------------------------------------------------------------------------
  //                          UI PANEL FUNCTIONS
  //
  // The functions below manage the construction of the layer control accordion,
  // visibility toggles, and the information panel for each layer.  They were
  // originally defined in the hazard viewer and are reproduced here to
  // maintain functionality when adding vulnerability layers.  If you extend
  // the application further, reuse these helpers to keep the UI consistent.

  /**
   * Creates the HTML structure for the corner panel based on the provided
   * configuration.  Each group becomes an accordion section and each item
   * generates a row with a checkbox and an information icon.  After
   * rendering, event listeners are attached to toggle layer visibility.
   *
   * @param {Array} config - An array of group objects (uiMappings).
   * @param {string} containerId - The ID of the container element to render into.
   */
  
function renderLayerControls(config, containerId) {
  const container = document.getElementById(containerId);

  // Clear-all button + legend hint + accordion container
  let html = `
    <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:8px;">
      <calcite-button id="clearAllTogglesBtn" width="full" appearance="outline" icon-start="trash">
        Clear all
      </calcite-button>
      <div style="font-size:0.75rem; color:var(--muted); display:flex; align-items:center; gap:4px; margin-top:2px;">
        <calcite-icon icon="information" scale="s"></calcite-icon>
        <span>Click the (i) icon to view a layer's legend</span>
      </div>
    </div>
    <calcite-accordion>
  `;

  config.forEach(group => {
    // Determine if any layer in the group is currently visible to expand
    const isGroupVisible = group.items.some(item =>
      item.layers.some(layer => layer && layer.visible === true)
    );
    const expanded = isGroupVisible ? " expanded" : "";
    html += `<calcite-accordion-item heading="${group.category}"${expanded}>`;

    group.items.forEach(item => {
      const layerVis = item.layers.some(layer => layer && layer.visible === true);
      const checked = layerVis ? " checked" : "";
      html += `
        <div class="layer-row">
          <calcite-action icon="information" id="info-${item.id}" text="More Info" appearance="transparent" scale="s"></calcite-action>
          <calcite-label layout="inline">
            <calcite-checkbox id="${item.id}"${checked}></calcite-checkbox>
            ${item.label}
          </calcite-label>
        </div>`;
    });

    html += `</calcite-accordion-item>`;
  });

  html += `</calcite-accordion>`;
  container.innerHTML = html;

  // Bind events (checkbox listeners + clear-all)
  setupVisibilityListeners(config);

  const clearBtn = document.getElementById("clearAllTogglesBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => clearAllToggles(config));
  }
}

/**
 * Clears all toggles:
 * - unchecks every checkbox
 * - hides all layers represented in the toggle panel
 */
function clearAllToggles(config) {
  config.forEach(group => {
    group.items.forEach(item => {
      // Hide layers
      item.layers.forEach(lyr => {
        if (lyr) lyr.visible = false;
      });

      // Uncheck UI control
      const checkbox = document.getElementById(item.id);
      if (checkbox) checkbox.checked = false;
    });
  });
}

/**
 * Iterates over the UI configuration and attaches change listeners to
 * checkboxes.  When a user toggles a checkbox the corresponding layers'
 * visibility is updated.
 *
 * @param {Array} config - The same configuration used to build the UI.
 */
function setupVisibilityListeners(config) {
  config.forEach(group => {
    group.items.forEach(item => {
      const checkbox = document.getElementById(item.id);
      if (!checkbox) return;

      checkbox.addEventListener("calciteCheckboxChange", (event) => {
        const isVisible = event.target.checked;
        item.layers.forEach(lyr => {
          if (lyr) lyr.visible = isVisible;
        });
      });
    });
  });
}

// Keep this variable outside of the listeners so we can remove the watch when closing
  let visibilityWatcher = null;

  /**
   * Loads metadata and legend information for a selected layer and populates
   * the info panel.  A slider is provided to adjust layer opacity.  A legend
   * is displayed for imagery layers via a custom fetch and via the Legend
   * widget for feature layers.
   *
   * @param {Object} item - An item from the uiMappings array.
   */
  async function updateInfoPanel(item) {
    const infoPanel = document.getElementById("infoPanel");
    const layer = item.layers[0];
    if (layer.loadStatus !== "loaded") await layer.load();
    // Choose the best description available
    const description = layer.portalItem?.description || layer.serviceDescription || "No description available.";
    // Build legend HTML depending on visibility and layer type
    let legendHTML = "";
    if (!layer.visible) {
      legendHTML = `
        <div style="padding: 10px; background: #fff5f5; border: 1px solid #feb2b2; border-radius: 4px; color: #c53030; font-size: 0.85rem; text-align: center;">
          <calcite-icon icon="view-hide" scale="s" style="margin-right: 5px; vertical-align: middle;"></calcite-icon>
          Layer Hidden
        </div>`;
    } else if (layer.type === "imagery") {
      legendHTML = await getRasterLegendHTML(layer);
    } else {
      legendHTML = `<div id="standard-legend-node"></div>`;
    }
    // Update panel content
    infoPanel.heading = item.label;
    infoPanel.innerHTML = `
      <div style="padding: 15px; display: flex; flex-direction: column; gap: 10px;">
        <div style="background: #f8f8f8; padding: 8px; border-radius: 4px;">
          <calcite-label scale="s">
            Layer Transparency
            <calcite-slider id="layer-opacity-slider" min="0" max="100" value="${Math.round(layer.opacity * 100)}" step="1" label-handles></calcite-slider>
          </calcite-label>
        </div>
        <strong style="font-size: 0.9rem;">Legend</strong>
        <div id="legend-container">${legendHTML}</div>
        <hr style="opacity: 0.2; margin: 5px 0;">
        <div class="metadata-content" style="font-size: 0.9rem; line-height: 1.4;">
          ${description}
        </div>
      </div>
    `;
    // Bind opacity slider
    const slider = document.getElementById("layer-opacity-slider");
    slider.addEventListener("calciteSliderInput", (event) => {
      layer.opacity = event.target.value / 100;
    });
    // Initialise legend for feature layers
    if (layer.visible && layer.type !== "imagery") {
      new Legend({
        view: view,
        layerInfos: [{ layer: layer }],
        container: "standard-legend-node"
      });
    }
  }

  /**
   * Attaches click listeners to each information button in the layer control
   * panel.  When clicked, the info panel opens and displays metadata and
   * legend details for the selected layer.  Re-clicking the same button
   * closes the panel.  A watch is used to update the legend when the layer
   * visibility changes.
   *
   * @param {Array} config - The same configuration used to build the UI.
   */
  function setupInfoListeners(config) {
    const infoWrapper = document.querySelector(".info-panel");
    const infoPanel = document.getElementById("infoPanel");
    // Handle panel close (X button) to reset state
    infoPanel.addEventListener("calcitePanelClose", () => {
      infoWrapper.style.display = "none";
      if (visibilityWatcher) visibilityWatcher.remove();
      document.querySelectorAll('.layer-row calcite-action').forEach(a => {
        a.active = false;
        a.classList.remove("info-active");
      });
    });
    config.forEach(group => {
      group.items.forEach(item => {
        const infoBtn = document.getElementById(`info-${item.id}`);
        if (!infoBtn) return;
        infoBtn.onclick = async () => {
          const isAlreadyActive = infoBtn.classList.contains("info-active");
          const layer = item.layers[0];
          // Reset all buttons
          document.querySelectorAll('.layer-row calcite-action').forEach(a => {
            a.active = false;
            a.classList.remove("info-active");
          });
          // If the button is already active, close the panel
          if (isAlreadyActive) {
            infoWrapper.style.display = "none";
            if (visibilityWatcher) visibilityWatcher.remove();
            return;
          }
          // Activate button and open panel
          infoBtn.active = true;
          infoBtn.classList.add("info-active");
          infoWrapper.style.display = "flex";
          infoPanel.closed = false;
          // Remove previous watcher
          if (visibilityWatcher) visibilityWatcher.remove();
          // Populate panel
          await updateInfoPanel(item);
          // Watch for visibility changes to refresh legend
          visibilityWatcher = layer.watch("visible", () => {
            updateInfoPanel(item);
          });
        };
      });
    });
  }

  /**
   * Fetches a legend for raster layers as HTML.  The ArcGIS REST API returns
   * base64 encoded images for each symbol; this helper constructs a small
   * table with the symbol image and its label.  If the layer is not an
   * ImageryLayer or the request fails, a fallback message is returned.
   *
   * @param {ImageryLayer|ImageryTileLayer} layer - The raster layer.
   * @returns {Promise<string>} - A snippet of HTML representing the legend.
   */
  async function getRasterLegendHTML(layer) {
    try {
      const response = await fetch(`${layer.url}/legend?f=pjson`);
      const data = await response.json();
      const layerLegend = data.layers && data.layers[0];
      if (!layerLegend || !layerLegend.legend) return "Legend not available.";
      let html = `<div class="custom-raster-legend">`;
      layerLegend.legend.forEach(item => {
        const imgSrc = `data:${item.contentType};base64,${item.imageData}`;
        html += `
          <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <img src="${imgSrc}" style="width: 20px; height: 20px; margin-right: 10px; border: 1px solid #eee;" />
            <span style="font-size: 0.85rem;">${item.label || ''}</span>
          </div>`;
      });
      html += `</div>`;
      return html;
    } catch (err) {
      console.error("Manual legend fetch failed:", err);
      return "Unable to load legend.";
    }
  }
  // They will be invoked later on the updated uiMappings.

  // ===========================================================================
  //                        HAZARD LAYER DEFINITIONS 
  // ===========================================================================

  // ============================ SMOKE LAYER =============================
  const smokeLayer = new ImageryTileLayer({
    portalItem: { id: SMOKE_LAYER_ITEM_ID },
    opacity: 1.0,
    blendMode: "multiply",
    visible: false,
    title: "Smoke hazard"
  });

  // APPROACH: CUSTOM COLOR RAMP
  smokeLayer.load().then(() => {
    const smokeColorRamp = createManualMultipartColorRamp(bluered10);
    if (smokeColorRamp) {
          const smokeRenderer = createPercentClipRenderer(0.5, 0.5, smokeColorRamp);
          smokeLayer.renderer = smokeRenderer;
          console.log("Successfully applied custom MultipartColorRamp.");
      }
  }).catch(error => {
      console.error("Error loading ImageryLayer or applying renderer:", error);
  });

  // ============================ ROCKFALL LAYER =============================
  const rockfallLayer = new ImageryTileLayer({
    portalItem: { id: ROCKFALL_LAYER_ITEM_ID },
    opacity: 0.8,
    visible: false,
    title: "Rockfall hazard"
  });

  smokeLayer.load().then(() => {
    const rockfallColorRamp = createManualMultipartColorRamp(rockfall);
    if (rockfallColorRamp) {
          const rockfallRenderer = createPercentClipRenderer(75, 0.5, rockfallColorRamp);
          rockfallLayer.renderer = rockfallRenderer;
          console.log("Successfully applied custom MultipartColorRamp.");
      }
  }).catch(error => {
      console.error("Error loading ImageryLayer or applying renderer:", error);
  });

  // ============================ DEBRIS FLOW LAYER =============================
  const debrisLayer = new ImageryTileLayer({
    portalItem: { id: DEBRISF_LAYER_ITEM_ID },
    opacity: 0.9,
    visible: false,
    title: "Rockfall hazard"
  });

  smokeLayer.load().then(() => {
    const debrisColorRamp = createManualMultipartColorRamp(debris);
    if (debrisColorRamp) {
      const debrisRenderer = createMinMaxRenderer(0.3, 1.0, debrisColorRamp);
      debrisLayer.renderer = debrisRenderer;
      console.log("Successfully applied custom MultipartColorRamp.");
    }
  }).catch(error => {
      console.error("Error loading ImageryLayer or applying renderer:", error);
  });

  // ============================ EXTREME HEAT LAYER =============================
  const lstLayer = new ImageryTileLayer({
    portalItem: { id: LST_LAYER_ITEM_ID },
    opacity: 0.9,
    visible: false,
    title: "Extreme Heat hazard"
  });
  lstLayer.load().then(() => {
    const lstColorRamp = createManualMultipartColorRamp(inferno);
    const lstRenderer = createPercentClipRenderer(0.5, 0.5, lstColorRamp);
    lstLayer.renderer = lstRenderer;
    console.log("Successfully applied custom MultipartColorRamp.");
  }).catch(error => {
      console.error("Error loading ImageryLayer or applying renderer:", error);
  });

  // ============================ NDVI LAYER =============================
  const ndviLayer = new ImageryTileLayer({
    portalItem: { id: NDVI_LAYER_ITEM_ID },
    opacity: 0.7,
    visible: false,
    title: "Drought Susceptibility"
  });
  ndviLayer.load().then(() => {
    const ndviColorRamp = createManualMultipartColorRamp(dry);
    const ndviRenderer = createMinMaxRenderer(-0.2, 0.2, ndviColorRamp);
    ndviLayer.renderer = ndviRenderer;
    console.log("Successfully applied custom MultipartColorRamp.");
  }).catch(error => {
      console.error("Error loading ImageryLayer or applying renderer:", error);
  });

  // ============================ FLOOD LAYERS =============================
  const dikesLayer = new FeatureLayer({
    portalItem: { id: DIKES_LAYER_ITEM_ID },
    title: "Flood Protection Dikes Layer",
    opacity: 1,
    visible: true,
    popupEnabled: true
  });  

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
    // Update the flood layer title to clarify return period and clear-water nature
    title: "Clear-water Flood hazard (200-year event)"
  });
  const floodExtentLayer = new FeatureLayer({
    portalItem: { id: FLOOD_OUTLINE_ITEM_ID },
    title: "Flood extent outline",
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0],
        outline: {
          color: [8, 48, 107, 1],
          width: 2
        }
      }
    },
    opacity: 1,
    popupEnabled: true
  });

  // ============================ WILDFIRE LAYERS =============================
  const fuelBreaksLayer = new FeatureLayer({
    portalItem: { id: FUELBREAKS_LAYER_ITEM_ID },
    title: "Fuel Breaks Layer",
    opacity: 1,
    visible: false,
    popupEnabled: true
  });  
  const fuelMngdLayer = new FeatureLayer({
    portalItem: { id: FUELMNG_LAYER_ITEM_ID },
    title: "Fuel Managed Areas Layer",
    opacity: 1,
    visible: false,
    popupEnabled: true
  });  
  const fireRiskLayer = new FeatureLayer({
    portalItem: { id: RISKCLS_LAYER_ITEM_ID },
    title: "Wildfire Risk Layer",
    opacity: 1,
    visible: false,
    popupEnabled: true
  });    
  const fireThreatLayer = new FeatureLayer({
    portalItem: { id: THREATCLS_LAYER_ITEM_ID },
    title: "Wildfire PSTA Threat Class",
    opacity: 1,
    visible: false,
    popupEnabled: true
  });

// ============================ COMMUNITY POINTS LAYERS =============================
// These layers represent various points of interest and facilities such as
// critical infrastructure, schools, police stations, medical centres, etc.
// They are pulled from the feature service identified by POINTS_ITEM_ID.
// We apply explicit simple-marker renderers so symbols remain visible and
// consistent across all zoom levels.

function makePointRenderer(colorRGBA) {
  return {
    type: "simple",
    symbol: {
      type: "simple-marker",
      style: "circle",
      size: 16,
      color: colorRGBA,
      outline: {
        color: [255, 255, 255, 0.95],
        width: 1.2
      }
    }
  };
}

const criticalInfrastructureLayer = new FeatureLayer({
  portalItem: { id: POINTS_ITEM_ID },
  layerId: 4,
  title: "Critical Infrastructure",
  visible: false,
  opacity: 1,
  popupEnabled: true,
  renderer: makePointRenderer([123, 50, 148, 0.95]), // purple
  minScale: 0,
  maxScale: 0
});

const pointsOfInterestLayer = new FeatureLayer({
  portalItem: { id: POINTS_ITEM_ID },
  layerId: 5,
  title: "Points of Interest",
  visible: false,
  opacity: 1,
  popupEnabled: true,
  renderer: makePointRenderer([255, 217, 47, 0.95]), // gold
  minScale: 0,
  maxScale: 0
});

const schoolLayer = new FeatureLayer({
  portalItem: { id: POINTS_ITEM_ID },
  layerId: 6,
  title: "School",
  visible: false,
  opacity: 1,
  popupEnabled: true,
  renderer: makePointRenderer([49, 163, 84, 0.95]), // green
  minScale: 0,
  maxScale: 0
});

const policeStationLayer = new FeatureLayer({
  portalItem: { id: POINTS_ITEM_ID },
  layerId: 7,
  title: "Police Station",
  visible: false,
  opacity: 1,
  popupEnabled: true,
  renderer: makePointRenderer([55, 126, 184, 0.95]), // blue
  minScale: 0,
  maxScale: 0
});

const medicalCentreLayer = new FeatureLayer({
  portalItem: { id: POINTS_ITEM_ID },
  layerId: 8,
  title: "Medical Centre",
  visible: false,
  opacity: 1,
  popupEnabled: true,
  renderer: makePointRenderer([228, 26, 28, 0.95]), // red
  minScale: 0,
  maxScale: 0
});

const fireDepartmentLayer = new FeatureLayer({
  portalItem: { id: POINTS_ITEM_ID },
  layerId: 9,
  title: "Fire Department",
  visible: false,
  opacity: 1,
  popupEnabled: true,
  renderer: makePointRenderer([255, 127, 0, 0.95]), // orange
  minScale: 0,
  maxScale: 0
});

// ============================================================================
//                        BASEMAP LAYER DEFINITIONS

// ============================================================================

  // --- Neighbourhoods: transparent fill, neutral grey outline ---
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
          // Use a neutral grey to differentiate from flood outlines
          color: [150, 150, 150, 1],
          width: 1
        }
      }
    },
    opacity: 1,
    popupEnabled: true,
    // Optional: override neighbourhood labels; rename Wedgewoods to Heliport if field exists
    // Removed labelingInfo to restore default neighbourhood labels and avoid
    // breaking pop-ups. This section can be re-enabled once the correct
    // field name for neighbourhood names is confirmed.
    // labelingInfo: [
    //   {
    //     labelExpressionInfo: {
    //       // Attempt to rename the Wedgewoods neighbourhood to Heliport. Replace `Name` with actual field name if different.
    //       expression: "IIF($feature.Name == 'Wedgewoods', 'Heliport', $feature.Name)"
    //     },
    //     symbol: {
    //       type: "text",
    //       color: [80, 80, 80, 0.9],
    //       haloSize: 1,
    //       haloColor: [255, 255, 255, 0.9],
    //       font: {
    //         family: "sans-serif",
    //         size: 10,
    //         weight: "normal"
    //       }
    //     },
    //     labelPlacement: "center-center"
    //   }
    // ]
  });

  // --- RMOW Boundary: subtle outline, no fill (always on; not in toggle panel) ---
  const rmowBoundaryLayer = new FeatureLayer({
    portalItem: { id: POINTS_ITEM_ID },
    layerId: 11,
    title: "RMOW Boundary",
    opacity: 1,
    visible: true,
    popupEnabled: false,
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0],
        outline: {
          color: [120, 120, 120, 0.35],
          width: 1
        }
      }
    }
  });

  // --- Building footprints: transparent fill with dark outline ---
  const buildingsLayer = new FeatureLayer({
    portalItem: { id: BUILDINGS_ITEM_ID },
    title: "Building Footprints",
    opacity: 1,
    popupEnabled: false,
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0], // transparent interior
        outline: {
          color: [0, 0, 0, 0.6],
          width: 0.7
        }
      }
    }
  });

  // ============================================================================
  //                        VULNERABILITY LAYER DEFINITIONS 
  // ============================================================================
  // The vulnerability section introduces new thematic layers for census variables.
  // Each entry in the configuration below defines how to map an attribute from
  // the dissemination‑area layer.  Additional entries can be appended to the
  // array to visualise other variables (e.g. low income, disability).  The
  // breaks and colours assume percentage values between 0 and 1.

  /**
   * Builds a simple class‑breaks renderer for vulnerability variables.
   * The provided breaks array should contain absolute percentage values (0–100)
   * defining the boundaries between classes.  Colours should contain one fewer
   * entry than breaks and will be assigned in order.  Labels are generated
   * directly from the break values without further scaling.
   *
   * @param {number[]} breaks - Array of breakpoints [0, …, 1].
   * @param {string[]} colors - Array of hex colours.
   * @param {string} fieldName - Attribute field to classify.
   * @returns {Object} Esri class breaks renderer.
   */
  function buildVulnerabilityRenderer(breaks, colors, fieldName) {
    const classBreakInfos = [];
    for (let i = 0; i < breaks.length - 1; i++) {
      classBreakInfos.push({
        minValue: breaks[i],
        maxValue: breaks[i + 1],
        symbol: {
          type: "simple-fill",
          color: colors[i],
          outline: {
            color: [80, 80, 80, 0.5],
            width: 0.5
          }
        },
        label: `${breaks[i]}% – ${breaks[i + 1]}%`
      });
    }
    return {
      type: "class-breaks",
      field: fieldName,
      classBreakInfos: classBreakInfos,
      defaultSymbol: {
        type: "simple-fill",
        color: [255, 255, 255, 0.1],
        outline: {
          color: [80, 80, 80, 0.3],
          width: 0.5
        }
      },
      defaultLabel: "No data"
    };
  }

  // Configuration objects for each vulnerability variable.  To add more
  // variables, copy an entry and update the id, label, field, breaks and
  // colours accordingly.  The breaks below divide percentages into five
  // classes (0–20%, 20–40%, … 80–100%).
  const vulnerabilityConfigs = [
    {
      id: "seniorVulnToggle",
      label: "Population 65+ (%)",
      field: "__65_and_older",
      // Seniors quintile breaks (approximate) based on available dissemination‑area data
      // 0%, 20th, 40th, 60th, 80th and max percentile values
      breaks: [0, 5.3, 7.2, 8.1, 10.2, 17],
      colors: palPurples5,
      visible: false
    },
    {
      id: "youngVulnToggle",
      label: "Children 0-4 (%)",
      field: "__0_to_4_years_old",
      // Children aged 0–4 quintile breaks (approximate) from 0% to 6.53%
      breaks: [0, 2.0, 2.4, 2.9, 3.9, 6.53],
      colors: palBlues5,
      visible: false
    },
    {
      id: "lowIncomeVulnToggle",
      label: "Low Income Households (%)",
      field: "__lico",
      // Low‑income household quintile breaks (approximate) from 0% to 6.53%
      breaks: [0, 2.0, 2.4, 2.9, 4.1, 6.53],
      colors: palReds5,
      visible: false
    },
    {
      id: "renterVulnToggle",
      label: "Renters (%)",
      field: "__renter",
      // Renter quintile breaks (approximate) from 0% to 81.08%
      breaks: [0, 28.1, 37.4, 47.4, 57.2, 81.1],
      colors: palOranges5,
      visible: false
    },
    {
      id: "livingAloneVulnToggle",
      label: "Living Alone (%)",
      field: "__living_alone",
      // Living‑alone quintile breaks (approximate) matching renter distribution
      breaks: [0, 28.1, 37.4, 47.4, 57.2, 81.1],
      colors: palGreens5,
      visible: false
    }
  ];

  // Placeholder for the instantiated layers.  Each config will push its layer
  // into this array so we can spread it into layerOrder later.
  const vulnerabilityLayers = [];

  // Outline layer for pop‑ups.  This layer draws DA boundaries without
  // colouring them and lists key vulnerability attributes (e.g. tempthresh_2021)
  // in its pop‑up.  It is always present in the map (opacity 0) so that
  // clicking on a polygon will reveal vulnerability information, but it no longer
  // appears in the layer toggle panel.
  const vulnerabilityOutlineLayer = new FeatureLayer({
    portalItem: { id: VULNERABILITY_LAYER_ITEM_ID },
    title: "DA boundaries (popups)",
    opacity: 0,
    visible: true,
    popupEnabled: false,
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0],
        outline: {
          color: [120, 120, 120, 0.6],
          width: 1.2
        }
      }
    },
    popupTemplate: {
      title: "Dissemination Area",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "__65_and_older",
              label: "Population 65+ (%)",
              format: { digitSeparator: true, places: 2 }
            },
            {
              fieldName: "__0_to_4_years_old",
              label: "Children 0-4 (%)",
              format: { digitSeparator: true, places: 2 }
            },
            {
              fieldName: "__lico",
              label: "Low Income Households (%)",
              format: { digitSeparator: true, places: 2 }
            },
            {
              fieldName: "__renter",
              label: "Renters (%)",
              format: { digitSeparator: true, places: 2 }
            },
            {
              fieldName: "__living_alone",
              label: "Living Alone (%)",
              format: { digitSeparator: true, places: 2 }
            },
            /* removed tempthresh_2021: user requested to show only specified fields */
          ]
        }
      ]
    },
    outFields: ["*"]
  });

  // Instantiate layers for each vulnerability configuration.
  vulnerabilityConfigs.forEach(cfg => {
    let renderer = null;
    if (cfg.breaks && cfg.colors) {
      renderer = buildVulnerabilityRenderer(cfg.breaks, cfg.colors, cfg.field);
      // Override legend title to use the layer label
      renderer.legendOptions = { title: cfg.label };
    }
    const layer = new FeatureLayer({
      portalItem: { id: VULNERABILITY_LAYER_ITEM_ID },
      title: cfg.label,
      renderer: renderer,
      opacity: 0.9,
      visible: cfg.visible,
      popupEnabled: false,
      popupTemplate: {
        title: "Dissemination Area",
        content: [
          {
            type: "fields",
            // Display only the standard vulnerability fields across all layers
            fieldInfos: [
              {
                fieldName: "__65_and_older",
                label: "Population 65+ (%)",
                format: { digitSeparator: true, places: 2 }
              },
              {
                fieldName: "__0_to_4_years_old",
                label: "Children 0-4 (%)",
                format: { digitSeparator: true, places: 2 }
              },
              {
                fieldName: "__lico",
                label: "Low Income Households (%)",
                format: { digitSeparator: true, places: 2 }
              },
              {
                fieldName: "__renter",
                label: "Renters (%)",
                format: { digitSeparator: true, places: 2 }
              },
              {
                fieldName: "__living_alone",
                label: "Living Alone (%)",
                format: { digitSeparator: true, places: 2 }
              }
            ]
          }
        ]
      },
      outFields: ["*"]
    });
    // Store the layer back on the config for UI mapping.
    cfg.layer = layer;
    vulnerabilityLayers.push(layer);
  });

  // ===========================================================================
  //                        Build layers and toggles
  // ===========================================================================
  // Add layers in desired order.  Vulnerability layers and the outline layer
  // are inserted before flood layers so they appear on top of basemap and
  // hazard layers but below flood overlays.
  layerOrder = [
    // Ensure neighbourhood polygons sit above buildings so their pop‑ups remain accessible
    neighbourhoodsLayer,
    rmowBoundaryLayer,
    criticalInfrastructureLayer,
    pointsOfInterestLayer,
    schoolLayer,
    policeStationLayer,
    medicalCentreLayer,
    fireDepartmentLayer,
    dikesLayer,
    buildingsLayer,
    smokeLayer,
    rockfallLayer,
    debrisLayer,
    fuelBreaksLayer,
    fuelMngdLayer,
    fireRiskLayer,
    fireThreatLayer,
    lstLayer,
    ndviLayer,
    ...vulnerabilityLayers,
    vulnerabilityOutlineLayer,
    // Community points layers are drawn on top of vulnerability polygons so they remain clickable
    
    floodExtentLayer,
    floodLayer,
    // Community points layers drawn at the top


  ];
  webmap.addMany(layerOrder);

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
    const scaleBar = new ScaleBar({
      view,
      unit: "metric",
    });
    view.ui.add(scaleBar, "bottom-right");
    const bottomCenterContainer = document.createElement("div");
    bottomCenterContainer.className = "bottom-center-scalebar";
    view.ui.add(bottomCenterContainer, "manual");
    bottomCenterContainer.appendChild(scaleBar.container);
    floodLayer.when().then(function () {
      if (floodLayer.fullExtent) {
        view.goTo(floodLayer.fullExtent.expand(1.1)).catch(() => {});
      }
    }).catch(function (error) {
      console.error("Flood layer failed to load:", error);
    });
    webmap.when().then(function () {
      layerOrder.forEach((layer, index) => {
        const position = webmap.layers.length - (index + 1);
        webmap.reorder(layer, position);
      });
    });
  });

  // --- UI toggles ---
  const uiMappings = [
    {
      category: "RMOW Basemap",
      items: [
        { id: "buildingsToggle", layers: [buildingsLayer], label: "Building Footprints", info: "B" },
        { id: "neighbourhoodsToggle", layers: [neighbourhoodsLayer], label: "Neighbourhoods", info: "N" },
      ]
    },
    {
      category: "Air Quality",
      items: [
        { id: "smokeToggle", layers: [smokeLayer], label: "3-year Smoke PM2.5 Exceedance Days", info: "S" },
      ]
    },
    {
      category: "Landslide",
      items: [
        { id: "rockfallToggle", layers: [rockfallLayer], label: "Rockfall Susceptibility", info: ""},
        { id: "debrisToggle", layers: [debrisLayer], label: "Debris Flow Susceptibility", info: ""},
      ]
    },
    {
      category: "Wildfire",
      items: [
        { id: "fuelBreakToggle", layers: [fuelBreaksLayer, fuelMngdLayer], label: "Fuel Breaks and Fire Managed Areas", info: ""},
        { id: "fireRiskToggle", layers: [fireRiskLayer], label: "Wildfire Risk Class ≥ Moderate", info: ""},
        { id: "fireThreatToggle", layers: [fireThreatLayer], label: "WUI Fire Threat Class ≥ 6", info: ""},
      ]
    },
    {
      category: "Extreme Heat",
      items: [
        { id: "lstToggle", layers: [lstLayer], label: "Extreme Heat hazard", info: ""},
      ]
    },
    {
      category: "Drought",
      items: [
        { id: "ndviToggle", layers: [ndviLayer], label: "Drought Susceptibility", info: "NDVI Anomaly"},
      ]
    },
    {
      category: "Vulnerability Layers",
      items: [
        // Generate a toggle for each vulnerability variable
        ...vulnerabilityConfigs.map(cfg => ({
          id: cfg.id,
          layers: [cfg.layer],
          label: cfg.label,
          info: ""
        }))
      ]
    },
    {
      // Points and facilities such as critical infrastructure and services
      category: "Community Facilities",
      items: [
        { id: "criticalToggle", layers: [criticalInfrastructureLayer], label: "Critical Infrastructure", info: "" },
        { id: "poiToggle", layers: [pointsOfInterestLayer], label: "Points of Interest", info: "" },
        { id: "schoolToggle", layers: [schoolLayer], label: "Schools", info: "" },
        { id: "policeToggle", layers: [policeStationLayer], label: "Police Stations", info: "" },
        { id: "medicalToggle", layers: [medicalCentreLayer], label: "Medical Centres", info: "" },
        { id: "fireToggle", layers: [fireDepartmentLayer], label: "Fire Departments", info: "" }
      ]
    },
    {
      category: "Flooding",
      items: [
        { id: "dikesToggle", layers: [dikesLayer], label: "Flood Protection Dikes", info: ""},
        { id: "floodToggle", layers: [floodLayer, floodExtentLayer], label: "Clear-water Flood hazard (200-year event)", info: ""}
      ]
    },
  ];  

  renderLayerControls(uiMappings, "layerPanel");
  setupVisibilityListeners(uiMappings);
  setupInfoListeners(uiMappings);

});