// const BASEMAP_ITEM_ID        = "16ccd4ff9fe3428690c776202ff4a5c7"; // Jamie's initial basemap
const BASEMAP_ITEM_ID = "a7dd522d5f374ef3840d2dc35c83b7ea"; // 
const ALT_BASEMAP_ITEM_ID = "17737d53d01845c1bf0af57a796db7b9"; // Colin's for underlay
const OVERLAY_ITEM_ID = "20e707c910c1493fa33818c4fe835f86"; // Merged overlay polygons
const WB_BOUNDARY_ITEM_ID = "088f30ca3b0e4e3db3cec1acdb9649ba";
const BUILDINGS_ITEM_ID = "b302800be04844b485800c5997d74766";
const ROADS_ITEM_ID = "???"; // Upload struggles

const SMOKE_LAYER_ITEM_ID = "02019d71f4e04a22851fb60cc2b076c2";
const ROCKFALL_LAYER_ITEM_ID = "093117efdd044aa0ae99c16e2f918922";
const DEBRISF_LAYER_ITEM_ID = "f6a548dcae7145dbad1f77a285f192f6";
const NDVI_LAYER_ITEM_ID = "daa0a40dbeb04d60af56d239dd592e8c";
const LST_LAYER_ITEM_ID = "5557e9f89df349809d212d54066ccbeb";
const FUELBREAKS_LAYER_ITEM_ID = "b7d65560b3514835a47fe541ef31bfb3";
const FUELMNG_LAYER_ITEM_ID = "b9421a66f7104e47886395fc70e61270";
const RISKCLS_LAYER_ITEM_ID = "1533a455f7e84c4d916c951a155f797d";
const FRONTERA_FIRE_ITEM_ID = "c65e72cfd9d94f6894c06d68b68e371c";
// Updated Threat Class layer ID from dev branch
const THREATCLS_LAYER_ITEM_ID = "b26943a92ea84cde8264e51b2470f5ca";

// New fire fuel types layer ID from dev branch
const FUELTYPES_LAYER_ITEM_ID = "201944f7b0814e939dc3f0626df86293";
const FLOOD_LAYER_ITEM_ID = "c14e543a2a8944b6aba17b589e2d532b";
const DEBRIS_FLOOD_ITEM_ID = "9b6689054e7a4d75a14c62aa200dd02e";
const NEIGHBOURHOOD_ITEM_ID = "eaaf9354f8ce4c8588e29f1137667cde"; // sublayer 12
const DIKES_LAYER_ITEM_ID = "6ce26b152302474281495a081ee7e4b0";
const FLOOD_OUTLINE_ITEM_ID = "39c5ebf72e18404eb39e6cf8399e3f0c";

const PRIORITY_HABITATS_ITEM_ID = "8a4213b4eee449eeb4210550586fa445";
const PARKS_ITEM_ID = "46daf11f3b7e4f0c8c1f1f49bf874b0e"; //"7b650524b5794f68a66b34ad96e89f8b";

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
const CRITICAL_ITEM_ID = "d9ab1c0cce584956859a34ddb10f34fc";

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
const starburst = ["#ec8787ff", "#f9cbb3ff", "#fff0d0ff", "#b7d5d7ff", "#70b6baff"];
const reds1 = ["#f6d7e0ff", "#e6968eff", "#db6a58ff", "#a1412cff"];
const redblue10 = ["#d7191cff", "#fdae61ff", "#ffffbfff", "#abdda4ff", "#2b83baff"];
const bluered10 = ["#2b83baff", "#abdda4ff", "#ffffbfff", "#fdae61ff", "#d7191cff"];
const redblue = ["#a53217ff", "#d2987fff", "#fffee6ff", "#8897a2ff", "#10305eff"];
const inferno = ["#520d8eff", "#bc2e9aff", "#ff5c6aff", "#ffb71bff", "#ffff64ff"];

const rockfall = ["#f9eedd00", "#dea183ff", "#cd7C58ff", "#ba5632ff"]
const debris = ["#44015400", "#48247540", "#41448780", "#355f8dbf", "#2a788eff", "#21918cff", "#22a884ff", "#44bf70ff", "#7ad151ff", "#bddf26ff", "#fde725ff"];
const dry = ["#543005ff", "#8c510aff", "#bf812dff", "#dfc27dff", "#f6e8c3ff", "#f5f5f500", "#c7eae5ff", "#80cdc1ff", "#35978fff", "#01665eff", "#003c30ff"];
const floodblue = ["#c6dbef", "#9ecae1", "#6baed6", "#3182bd", "#08519c"];
const debrisfloodblue = ["#c7e6e3", "#9fd3cf", "#6fb7b2", "#3b8f8a", "#0b5f5a"];


const fronterathreatcolor = ["#fff7bc", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404"];


// Sequential five‑class palettes for vulnerability layers (light → dark)
// These palettes are derived from ColorBrewer (https://colorbrewer2.org/) and
// provide consistent hues across different categories. Each array contains
// five colours, corresponding to the five classes produced by the quantile
// breaks in vulnerabilityConfigs.
const palPurples5 = ["#f2f0f7", "#cbc9e2", "#9e9ac8", "#756bb1", "#54278f"]; // seniors
const palBlues5 = ["#eff3ff", "#bdd7e7", "#6baed6", "#3182bd", "#08519c"]; // children
const palReds5 = ["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"]; // low income
const palGreens5 = ["#edf8e9", "#bae4b3", "#74c476", "#31a354", "#006d2c"]; // living alone
const palOranges5 = ["#feedde", "#fdbe85", "#fd8d3c", "#e6550d", "#a63603"]; // renters

// Environmental colors
const envForestGreen = "#1f4d2b";
const envTanGreen = "#8a9b5a";
const envTeal = "#1b8a8f";

const imageryColorbars = {
  Smoke: {
    colors: bluered10,
    title: "Smoke hazard",
    leftLabel: "0 Days",
    rightLabel: "114 Days"
  },
  Rockfall: {
    colors: rockfall,
    title: "Rockfall susceptibility",
    leftLabel: "Lower",
    rightLabel: "Higher"
  },
  Debris: {
    colors: debris,
    title: "Debris flow susceptibility",
    leftLabel: "Lower",
    rightLabel: "Higher"
  },
  LST: {
    colors: inferno,
    title: "Extreme heat hazard",
    leftLabel: "3°C",
    rightLabel: "38°C"
  },
  NDVI: {
    colors: dry,
    title: "Drought susceptibility",
    leftLabel: "Drought<br>susceptible",
    rightLabel: "Drought<br>tolerant"
  },
  Flood: {
    colors: floodblue,
    title: "Clear-water flood depth (200-year)",
    leftLabel: "0\u00A0m",
    rightLabel: "7.7\u00A0m"
  },
  DebrisFlood: {
    colors: debrisfloodblue,
    title: "Debris flood depth (200-year)",
    leftLabel: "0\u00A0m",
    rightLabel: "10.9\u00A0m"
  },
  FronteraFireThreat: {
    colors: fronterathreatcolor,
    title: "Frontera Fire Threat",
    leftLabel: "Low Threat",
    rightLabel: "High Threat"
  }
};

require([
  "esri/config",
  "esri/WebMap",
  "esri/layers/ImageryTileLayer",
  "esri/layers/ImageryLayer",
  "esri/layers/FeatureLayer",
  "esri/layers/VectorTileLayer",
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
  VectorTileLayer,
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
  // esriConfig.apiKey = "YOUR_API_KEY"; // if secured content is asdded later

  // --- WebMap (basemap + existing AGOL layers) ---
  const webmap = new WebMap({
    portalItem: {
      id: ALT_BASEMAP_ITEM_ID
    }
  });
  const REF_LAYER_ID = "14fbc125ccc9488888b014db09f35f67"
  const referenceLayer = new VectorTileLayer({
    portalItem: {
      id: REF_LAYER_ID
    },
    title: "Basemap Reference",
    opacity: 1,
    popupEnabled: false,
    visible: true,
  });

  // ============================================================================
  //                          FUNCTIONS
  // ============================================================================

  // ============================ RASTER RENDERERS =============================

  // Builds a multipart color ramp from hex colors
  // Uses ratios for non-even spacing
  function createManualMultipartColorRamp(colorHexCodes, ratios) {
    if (!colorHexCodes || colorHexCodes.length < 2) {
      console.error("Multipart color ramp requires at least two colors");
      return null;
    }

    if (ratios && ratios.length !== colorHexCodes.length) {
      console.error("If ratios are provided, the count must match the color count");
      return null;
    }

    const segments = [];

    for (let i = 0; i < colorHexCodes.length - 1; i++) {
      const fromColor = new Color(colorHexCodes[i]);
      const toColor = new Color(colorHexCodes[i + 1]);

      const segment = new AlgorithmicColorRamp({
        algorithm: "cie-lab",
        fromColor,
        toColor
      });

      if (ratios) {
        segments.push({
          colorRamp: segment,
          ratio: ratios[i]
        });
      } else {
        segments.push(segment);
      }
    }

    return new MultipartColorRamp({
      colorRamps: segments
    });
  }

  // Creates a raster renderer using explicit min/max values
  function createMinMaxRenderer(min, max, colorRamp) {
    return new RasterStretchRenderer({
      stretchType: "min-max",
      statistics: [{
        min,
        max,
        avg: 0.0,
        stddev: 0.0
      }],
      colorRamp,
      dynamicRangeAdjustment: false
    });
  }

  // Creates a raster renderer that clips low/high tails by percent
  function createPercentClipRenderer(minPercent, maxPercent, colorRamp) {
    return new RasterStretchRenderer({
      stretchType: "percent-clip",
      minPercent,
      maxPercent,
      colorRamp,
      dynamicRangeAdjustment: false
    });
  }

  // Raster renderer after an imagery layer loads
  // Offloads heft from haz layer definitions
  function applyImageryRenderer(layer, {
    legendKey,
    buildRenderer
  }) {
    if (legendKey) layer._legendKey = legendKey;

    layer.load().then(() => {
      const renderer = buildRenderer();
      if (renderer) layer.renderer = renderer;
    }).catch((error) => {
      console.error("Error loading imagery layer or applying renderer:", layer?.title, error);
    });
  }


  // ============================ LEGEND HTML HELPERS ==========================

  // Builds a simple continuous colorbar block for imagery legends
  // much nicer than esri
  function makeContinuousColorbarHTML({
    colors,
    leftLabel,
    rightLabel,
    title
  }) {
    const gradient = `linear-gradient(to right, ${colors.join(",")})`;

    return `
      <div style="display:flex; flex-direction:column; gap:6px;">
        ${title ? `<div style="font-weight:600; font-size:0.9rem;">${title}</div>` : ""}
        <div style="height:14px; border-radius:8px; border:1px solid #ddd; background:${gradient};"></div>
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#444;">
          <span>${leftLabel ?? ""}</span>
          <span>${rightLabel ?? ""}</span>
        </div>
      </div>
    `;
  }

  // Escapes text for HTML insertion
  function escapeHtml(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }


  // ============================ COLOR / SYMBOL HELPERS =======================

  // Normalizes various Esri and CIM color shapes into CSS rgba()
  // Accepts strings, arrays, Esri Color, and CIM-ish objects
  function colorToCss(c) {
    if (c == null) return "rgba(0,0,0,0)";

    if (typeof c === "string") return c;

    if (typeof c.toRgba === "function") {
      const [r, g, b, a = 1] = c.toRgba();
      return `rgba(${r},${g},${b},${a})`;
    }

    if (Array.isArray(c)) {
      const [r, g, b, a = 1] = c;
      return `rgba(${r},${g},${b},${a})`;
    }

    if (typeof c === "object") {
      if (Number.isFinite(c.r) && Number.isFinite(c.g) && Number.isFinite(c.b)) {
        const a = Number.isFinite(c.a) ? c.a : 1;
        return `rgba(${c.r},${c.g},${c.b},${a})`;
      }

      if (Array.isArray(c.values) && c.values.length >= 3) {
        const [r, g, b, aRaw] = c.values;
        let a = 1;

        if (typeof aRaw === "number") {
          if (aRaw > 1 && aRaw <= 100) a = aRaw / 100;
          else if (aRaw > 100) a = aRaw / 255;
          else a = aRaw;
        }

        return `rgba(${r},${g},${b},${a})`;
      }
    }

    return "rgba(0,0,0,0.18)";
  }

  // Renders a rectangle swatch for polygon symbols
  function swatchRect(fillCss, outlineCss = "rgba(0,0,0,0.25)", outlineWidth = 1) {
    const fill = fillCss || "rgba(0,0,0,0.18)";
    const outline = outlineCss || "rgba(0,0,0,0.25)";
    const ow = outlineWidth ?? 1;

    return `<span class="custom-swatch-rect" style="background:${fill}; border:${ow}px solid ${outline};"></span>`;
  }

  // Renders a line swatch for polyline symbols
  function swatchLine(lineCss, width = 3) {
    return `
      <span class="custom-swatch-line">
        <span style="border-top:${width}px solid ${lineCss};"></span>
      </span>
    `;
  }

  // Renders an icon swatch for picture-marker symbols
  // Used for point layers and custom SVG pins
  function swatchIcon(url) {
    return `
      <span class="custom-swatch-icon">
        <img alt="" src="${escapeHtml(url)}" />
      </span>
    `;
  }


  // ============================ CIM PARSING ==================================

  // Pulls the first solid fill and stroke found in a CIM JSON symbol
  // Good enough for legend swatches even if CIM is complex
  // This was so monstrously tedious to set up
  // DONT CHANGE UNLESS YOU HAVE AN INCREDIBLY COMPELLING REASON
  function extractCimFillAndStroke(cimJson) {
    const out = {
      fillCss: null,
      strokeCss: null,
      strokeWidth: null
    };

    const rgbaFromParts = (r, g, b, aRaw) => {
      let a = 1;
      if (typeof aRaw === "number") a = aRaw > 1 ? aRaw / 255 : aRaw;
      return `rgba(${r},${g},${b},${a})`;
    };

    const getCimRgba = (c) => {
      if (!c) return null;

      if (Array.isArray(c.values) && c.values.length >= 3) {
        const [r, g, b, aRaw] = c.values;
        return rgbaFromParts(r, g, b, aRaw);
      }

      if (Array.isArray(c) && c.length >= 3) {
        const [r, g, b, aRaw] = c;
        return rgbaFromParts(r, g, b, aRaw);
      }

      return null;
    };

    const visit = (node) => {
      if (!node || typeof node !== "object") return;

      if (node.type === "CIMSymbolReference" && node.symbol) {
        visit(node.symbol);
        return;
      }

      if (node.type === "CIMSolidFill" && !out.fillCss) {
        out.fillCss = getCimRgba(node.color);
      }

      if (node.type === "CIMSolidStroke" && !out.strokeCss) {
        out.strokeCss = getCimRgba(node.color);
        out.strokeWidth = node.width ?? out.strokeWidth;
      }

      for (const k of Object.keys(node)) {
        const v = node[k];
        if (Array.isArray(v)) v.forEach(visit);
        else if (v && typeof v === "object") visit(v);
      }
    };

    visit(cimJson);
    return out;
  }


  // ============================ LEGEND ROW BUILDERS ==========================

  // Converts an Esri symbol into a small HTML swatch
  // geometryTypeHint should be point | polyline | polygon when available
  function symbolToSwatch(symbol, geometryTypeHint) {
    if (!symbol) return swatchRect("rgba(0,0,0,0.15)");

    if (symbol.type === "cim") {
      const cimJson = symbol.data?.toJSON?.() ? symbol.data.toJSON() : (symbol.data ?? symbol);
      const {
        fillCss,
        strokeCss,
        strokeWidth
      } = extractCimFillAndStroke(cimJson);

      const safeStroke = strokeCss ?? "rgba(0,0,0,0.8)";
      const safeFill = fillCss ?? safeStroke.replace(/rgba\(([^)]+)\)/, (m, inner) => {
        const parts = inner.split(",").map(s => s.trim());
        if (parts.length === 4) parts[3] = "0.35";
        else parts.push("0.35");
        return `rgba(${parts.join(",")})`;
      });

      if (geometryTypeHint === "polyline") return swatchLine(safeStroke, strokeWidth ?? 3);
      return swatchRect(safeFill, safeStroke, strokeWidth ?? 2);
    }

    if (symbol.type === "picture-marker" && symbol.url) {
      return swatchIcon(symbol.url);
    }

    if (symbol.type === "simple-marker") {
      const fill = colorToCss(symbol.color);
      const outline = colorToCss(symbol.outline?.color);
      const ow = symbol.outline?.width ?? 1.2;

      return `
        <span class="custom-swatch-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="7" fill="${fill}" stroke="${outline}" stroke-width="${ow}"></circle>
          </svg>
        </span>
      `;
    }

    if (symbol.type === "simple-line") {
      return swatchLine(colorToCss(symbol.color), symbol.width ?? 2.5);
    }

    if (symbol.type === "simple-fill") {
      return swatchRect(
        colorToCss(symbol.color),
        colorToCss(symbol.outline?.color),
        symbol.outline?.width ?? 1
      );
    }

    if (geometryTypeHint === "polyline") return swatchLine("rgba(0,0,0,0.9)", 3);
    return swatchRect("rgba(0,0,0,0.15)");
  }

  // Converts a renderer into labeled legend rows
  function rendererToRows(renderer, geometryTypeHint) {
    if (!renderer) return [];

    const vv = renderer.visualVariables?.find(v => v.type === "color");
    if (vv?.stops?.length) {
      return vv.stops.map(s => {
        const fill = colorToCss(s.color);
        return {
          label: s.label ?? (s.value != null ? String(s.value) : ""),
          swatch: geometryTypeHint === "polyline" ?
            swatchLine(fill, 3) :
            swatchRect(fill, "rgba(0,0,0,0.25)", 1)
        };
      });
    }

    if (renderer.type === "unique-value" && Array.isArray(renderer.uniqueValueInfos)) {
      return renderer.uniqueValueInfos.map(info => ({
        label: info.label ?? info.value ?? "",
        swatch: symbolToSwatch(info.symbol, geometryTypeHint)
      }));
    }

    if (renderer.type === "class-breaks" && Array.isArray(renderer.classBreakInfos)) {
      return renderer.classBreakInfos.map(info => ({
        label: info.label ?? "",
        swatch: symbolToSwatch(info.symbol, geometryTypeHint)
      }));
    }

    if (renderer.type === "simple" && renderer.symbol) {
      return [{
        label: "",
        swatch: symbolToSwatch(renderer.symbol, geometryTypeHint)
      }];
    }

    if (renderer.symbol) {
      return [{
        label: "",
        swatch: symbolToSwatch(renderer.symbol, geometryTypeHint)
      }];
    }

    return [];
  }

  // Builds the full legend HTML block for a feature layer
  // Use singleRowLabel to force one row with the item label
  function buildCustomFeatureLegendHTML({
    layer,
    title,
    showTitle = true,
    singleRowLabel = null
  } = {}) {
    const geom = layer?.geometryType;
    const rows = rendererToRows(layer?.renderer, geom);

    if (!rows.length) {
      return `<div style="font-size:0.85rem; color:#666;">Legend unavailable</div>`;
    }

    if (singleRowLabel) {
      return `
        <div class="custom-legend-block custom-legend-no-title">
          <div class="custom-legend-rows">
            <div class="custom-legend-row">
              ${rows[0].swatch}
              <div class="custom-legend-label">${escapeHtml(singleRowLabel)}</div>
            </div>
          </div>
        </div>
      `;
    }

    const titleHtml = showTitle && title ?
      `<div class="custom-legend-title">${escapeHtml(title)}</div>` :
      "";

    const rowsHtml = rows.map(r => `
      <div class="custom-legend-row">
        ${r.swatch}
        <div class="custom-legend-label">${escapeHtml(r.label)}</div>
      </div>
    `).join("");

    return `
      <div class="custom-legend-block ${showTitle ? "" : "custom-legend-no-title"}">
        ${titleHtml}
        <div class="custom-legend-rows">
          ${rowsHtml}
        </div>
      </div>
    `;
  }


  // ============================================================================
  //                          UI AND STATE
  // ============================================================================

  let opacityUiEnabled = false;
  const initialLayerState = new Map();
  const initialItemState = new Map();


  // ============================ INFO ==================================

  // Opens the info for a layer item and fills in descriptions
  // Pulls from portalItem.description when available
  async function openInfoModalForItem(item) {
    const modal = document.getElementById("infoModal");
    const titleNode = document.getElementById("infoModalTitle");
    const contentNode = document.getElementById("infoModalContent");
    if (!modal || !titleNode || !contentNode) return;

    titleNode.textContent = item.label || "Layer info";

    await Promise.all(
      (item.layers || []).map(async (lyr) => {
        try {
          await lyr.load();
        } catch (_) { }
      })
    );

    const descBlocks = (item.layers || [])
      .map((lyr) => {
        const raw = (
          lyr.portalItem?.description ||
          lyr.serviceDescription ||
          lyr.description ||
          ""
        ).trim();

        const isEmpty = !raw ||
          raw.toLowerCase() === "no description available." ||
          raw.toLowerCase() === "no description." ||
          raw.toLowerCase() === "no description";

        if (isEmpty) return "";

        return `
          <div class="desc-block">
            <div class="desc-title">${escapeHtml(lyr.title || "Layer")}</div>
            <div class="desc-body">${raw}</div>
          </div>
        `;
      })
      .filter(Boolean)
      .join("");

    contentNode.innerHTML =
      descBlocks ||
      `<div class="desc-empty">No description is available for this layer</div>`;

    modal.open = true;
  }

  // Binds each item’s info button to the info modal
  // Uses ids like info-smokeToggle
  function setupInfoListeners(config) {
    config.forEach(group => {
      group.items.forEach(item => {
        const infoBtn = document.getElementById(`info-${item.id}`);
        if (!infoBtn) return;

        infoBtn.onclick = async () => {
          await openInfoModalForItem(item);
        };
      });
    });
  }


  // ============================ RESET ==============================

  // Captures initial visibility and opacity so reset works reliably
  // Only runs once per page load
  function snapshotInitialState(config) {
    if (initialLayerState.size > 0 || initialItemState.size > 0) return;

    config.forEach(group => {
      group.items.forEach(item => {
        const checked = item.layers.some(lyr => lyr && lyr.visible === true);

        const firstOpacity = item.layers?.[0]?.opacity ?? 1;
        const sliderValue = Math.round(firstOpacity * 100);

        initialItemState.set(item.id, {
          checked,
          sliderValue
        });

        item.layers.forEach(lyr => {
          if (!lyr) return;
          initialLayerState.set(lyr.uid, {
            visible: !!lyr.visible,
            opacity: lyr.opacity ?? 1
          });
        });
      });
    });
  }


  // ============================ OPACITY =============================

  // Shows/hides the per-item opacity slider based on mode and checkbox state
  // Slider is hidden if opacity UI is disabled or item is unchecked
  function setOpacitySliderVisibilityForItem(itemId, isChecked) {
    const slider = document.getElementById(`opacity-${itemId}`);
    if (!slider) return;

    const shouldShow = opacityUiEnabled && isChecked;
    slider.classList.toggle("is-hidden", !shouldShow);
  }

  // Refreshes all slider visibilities after mode changes
  // Reads current checkbox state from the DOM
  function refreshAllOpacitySliderVisibility(config) {
    config.forEach(group => {
      group.items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        const isChecked = checkbox ?
          checkbox.checked :
          item.layers.some(lyr => lyr && lyr.visible);

        setOpacitySliderVisibilityForItem(item.id, isChecked);
      });
    });
  }

  // Wires up the toolbar buttons for opacity mode and reset
  // Reset restores initial visibility and opacity for every layer in config
  function setupOpacityUiButtons(config) {
    const toggleBtn = document.getElementById("toggleOpacityUiBtn");
    const resetBtn = document.getElementById("resetLayersBtn");

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        opacityUiEnabled = !opacityUiEnabled;
        toggleBtn.innerText = opacityUiEnabled ? "Hide opacities" : "Change opacities";
        refreshAllOpacitySliderVisibility(config);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        config.forEach(group => {
          group.items.forEach(item => {
            const itemInit = initialItemState.get(item.id);
            const checkbox = document.getElementById(item.id);
            const slider = document.getElementById(`opacity-${item.id}`);

            if (checkbox && itemInit) checkbox.checked = itemInit.checked;

            item.layers.forEach(lyr => {
              if (!lyr) return;
              const st = initialLayerState.get(lyr.uid);
              if (!st) return;

              lyr.visible = st.visible;
              lyr.opacity = st.opacity;
            });

            if (slider && itemInit) slider.value = itemInit.sliderValue;

            const checkedNow = checkbox ?
              checkbox.checked :
              item.layers.some(lyr => lyr && lyr.visible);

            setOpacitySliderVisibilityForItem(item.id, checkedNow);
          });
        });

        renderLegendPanel(config);
      });
    }
  }


  // ============================ LAYER TOGGLES ===============================

  // Binds checkbox + slider events for every item in the layer panel
  // Checkbox controls visibility, slider controls opacity for all layers in the item
  function setupVisibilityListeners(config) {
    snapshotInitialState(config);

    config.forEach(group => {
      group.items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        const slider = document.getElementById(`opacity-${item.id}`);
        if (!checkbox) return;

        if (slider) {
          slider.value = Math.round(((item.layers?.[0]?.opacity ?? 1) * 100));
        }

        setOpacitySliderVisibilityForItem(item.id, checkbox.checked);

        checkbox.addEventListener("calciteCheckboxChange", (event) => {
          const isVisible = event.target.checked;

          item.layers.forEach(lyr => {
            if (lyr) lyr.visible = isVisible;
          });

          setOpacitySliderVisibilityForItem(item.id, isVisible);
          renderLegendPanel(config);
        });

        if (slider) {
          slider.addEventListener("calciteSliderInput", (event) => {
            const val = event.target.value / 100;
            item.layers.forEach(lyr => {
              if (lyr) lyr.opacity = val;
            });
          });
        }
      });
    });
  }


  // ============================ LAYER PANEL RENDER ==========================

  // Builds the layer panel HTML from config
  // Binds listeners after insertion
  function renderLayerControls(config, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="layer-controls-toolbar">
        <calcite-button id="toggleOpacityUiBtn" appearance="outline" scale="s" width="full">
          Change opacities
        </calcite-button>
        <calcite-button id="resetLayersBtn" appearance="outline" scale="s">
          Reset
        </calcite-button>
      </div>
      <calcite-accordion>
    `;

    config.forEach(group => {
      const isGroupVisible = group.items.some(item =>
        item.layers.some(layer => layer && layer.visible === true)
      );

      html += `<calcite-accordion-item heading="${group.category}"${isGroupVisible ? " expanded" : ""}>`;

      group.items.forEach(item => {
        const layerVis = item.layers.some(layer => layer && layer.visible === true);
        const checked = layerVis ? " checked" : "";
        const initialOpacity = Math.round(((item.layers?.[0]?.opacity ?? 1) * 100));

        html += `
          <div class="layer-row">
            <calcite-action icon="information" id="info-${item.id}" text="More Info" appearance="transparent" scale="s"></calcite-action>

            <calcite-label layout="inline">
              <calcite-checkbox id="${item.id}"${checked}></calcite-checkbox>
              <span class="layer-label">${escapeHtml(item.label)}</span>
            </calcite-label>

            <calcite-slider
              id="opacity-${item.id}"
              class="opacity-slider is-hidden"
              min="0" max="100" step="1"
              value="${initialOpacity}"
              scale="s"
            ></calcite-slider>
          </div>
        `;
      });

      html += `</calcite-accordion-item>`;
    });

    html += `</calcite-accordion>`;
    container.innerHTML = html;

    setupVisibilityListeners(config);
    setupOpacityUiButtons(config);
  }


  // ============================ LEGEND PANEL ================================

  // Renders the permanent legend panel based on currently visible items
  // Uses custom HTML for both imagery and feature layers
  function renderLegendPanel(config) {
    const legendContent = document.getElementById("legendContent");
    if (!legendContent) return;

    const visibleItems = [];
    config.forEach(group => {
      group.items.forEach(item => {
        if (item.hideFromLegend) return;
        const anyVisible = item.layers?.some(lyr => lyr && lyr.visible === true);
        if (anyVisible) visibleItems.push(item);
      });
    });

    if (visibleItems.length === 0) {
      legendContent.innerHTML = `
        <div style="font-size:0.85rem; color:#666;">
          No layers are currently visible
        </div>
      `;
      return;
    }

    const blocks = visibleItems.map(item => {
      const layerBlocks = item.layers
        .filter(lyr => lyr && lyr.visible)
        .map(lyr => {
          const isImagery = (lyr.type === "imagery" || lyr.type === "imagery-tile");
          if (isImagery) {
            const key = lyr._legendKey;
            const cfg = key ? imageryColorbars[key] : null;

            return `
              <div class="legend-layer-block" style="margin-top:2px;">
                ${cfg
                ? makeContinuousColorbarHTML(cfg)
                : `<div style="font-size:0.85rem; color:#666;">Legend not configured</div>`
              }
              </div>
            `;
          }

          const singleRowLabel = item.legendStyle === "singleRow" ? item.label : null;
          const showTitle = item.legendStyle !== "singleRow";

          return `
            <div class="legend-layer-block" style="margin-top:2px;">
              ${buildCustomFeatureLegendHTML({
            layer: lyr,
            title: showTitle ? (lyr.title || item.label) : "",
            showTitle,
            singleRowLabel
          })}
            </div>
          `;
        })
        .join("");

      return `
        <div class="legend-item" style="padding:8px 0; border-bottom:1px solid rgba(0,0,0,0.08);">
          ${layerBlocks}
        </div>
      `;
    }).join("");

    legendContent.innerHTML = blocks;
  }



  function setupInfoListeners(config) {
    config.forEach(group => {
      group.items.forEach(item => {
        const infoBtn = document.getElementById(`info-${item.id}`);
        if (!infoBtn) return;

        infoBtn.onclick = async () => {
          await openInfoModalForItem(item);
        };
      });
    });
  }

  // ============================================================================
  //                        HAZARD LAYER DEFINITIONS
  // ============================================================================

  // ============================ SMOKE LAYER =============================
  const smokeLayer = new ImageryTileLayer({
    portalItem: {
      id: SMOKE_LAYER_ITEM_ID
    },
    title: "Smoke hazard",
    opacity: 1.0,
    blendMode: "multiply",
    visible: false
  });

  applyImageryRenderer(smokeLayer, {
    legendKey: "Smoke",
    buildRenderer: () => {
      const ramp = createManualMultipartColorRamp(bluered10);
      if (!ramp) return null;
      return createPercentClipRenderer(0.5, 0.5, ramp);
    }
  });

  // ============================ ROCKFALL LAYER =============================
  const rockfallLayer = new ImageryTileLayer({
    portalItem: {
      id: ROCKFALL_LAYER_ITEM_ID
    },
    title: "Rockfall hazard",
    opacity: 0.8,
    visible: false
  });

  applyImageryRenderer(rockfallLayer, {
    legendKey: "Rockfall",
    buildRenderer: () => {
      const ramp = createManualMultipartColorRamp(rockfall);
      if (!ramp) return null;
      return createPercentClipRenderer(75, 0.5, ramp);
    }
  });

  // ============================ DEBRIS FLOW LAYER =============================
  const debrisLayer = new ImageryTileLayer({
    portalItem: {
      id: DEBRISF_LAYER_ITEM_ID
    },
    title: "Debris flow hazard",
    opacity: 0.9,
    visible: false
  });

  applyImageryRenderer(debrisLayer, {
    legendKey: "Debris",
    buildRenderer: () => {
      const ramp = createManualMultipartColorRamp(debris);
      if (!ramp) return null;
      return createMinMaxRenderer(0.3, 1.0, ramp);
    }
  });

  // ============================ EXTREME HEAT LAYER =============================
  const lstLayer = new ImageryTileLayer({
    portalItem: {
      id: LST_LAYER_ITEM_ID
    },
    title: "Extreme Heat hazard",
    opacity: 0.9,
    visible: false
  });

  applyImageryRenderer(lstLayer, {
    legendKey: "LST",
    buildRenderer: () => {
      const ramp = createManualMultipartColorRamp(inferno);
      if (!ramp) return null;
      return createPercentClipRenderer(0.5, 0.5, ramp);
    }
  });

  // ============================ NDVI LAYER =============================
  const ndviLayer = new ImageryTileLayer({
    portalItem: {
      id: NDVI_LAYER_ITEM_ID
    },
    title: "Drought Susceptibility",
    opacity: 0.7,
    visible: false
  });

  applyImageryRenderer(ndviLayer, {
    legendKey: "NDVI",
    buildRenderer: () => {
      const ramp = createManualMultipartColorRamp(dry);
      if (!ramp) return null;

      const r = createMinMaxRenderer(-0.2, 0.2, ramp);
      r.legendOptions = {
        title: "Drought susceptibility (NDVI anomaly)",
        minLabel: "Lower",
        maxLabel: "Higher"
      };

      return r;
    }
  });


  // ============================================================================
  //                        FLOOD LAYER DEFINITIONS
  // ============================================================================

  // ============================ DIKES LAYER =============================
  const dikesLayer = new FeatureLayer({
    portalItem: {
      id: DIKES_LAYER_ITEM_ID
    },
    title: "Flood Protection Dikes",
    opacity: 1,
    visible: false,
    popupEnabled: true
  });

  // Shared renderer for flood depth rasters
  const clearFloodRenderer = {
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
      fromColor: [198, 219, 239, 255],
      toColor: [8, 48, 107, 255],
      algorithm: "lab-lch"
    }
  };

  const debrisFloodRenderer = {
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
      fromColor: [199, 230, 227, 255],
      toColor: [11, 95, 90, 255],
      algorithm: "lab-lch"
    }
  };

  // ============================ FLOOD DEPTH LAYER =============================
  const floodLayer = new ImageryTileLayer({
    portalItem: {
      id: FLOOD_LAYER_ITEM_ID
    },
    title: "Clear-water Flood hazard (200-year event)",
    renderer: clearFloodRenderer,
    opacity: 1,
    visible: false
  });
  floodLayer._legendKey = "Flood";

  // ============================ DEBRIS FLOOD DEPTH LAYER =============================
  const debrisFloodLayer = new ImageryTileLayer({
    portalItem: {
      id: DEBRIS_FLOOD_ITEM_ID
    },
    title: "Debris Flood hazard (200-year event)",
    renderer: debrisFloodRenderer,
    opacity: 1,
    visible: false
  });
  debrisFloodLayer._legendKey = "DebrisFlood";

  // ============================ FLOOD EXTENT OUTLINE =============================
  // const floodExtentLayer = new FeatureLayer({
  //   portalItem: {
  //     id: FLOOD_OUTLINE_ITEM_ID
  //   },
  //   title: "Flood extent outline",
  //   opacity: 1,
  //   visible: false,
  //   popupEnabled: true,
  //   renderer: {
  //     type: "simple",
  //     symbol: {
  //       type: "simple-fill",
  //       color: [0, 0, 0, 0],
  //       outline: {
  //         color: [8, 48, 107, 1],
  //         width: 2
  //       }
  //     }
  //   }
  // });


  // ============================================================================
  //                        WILDFIRE LAYER DEFINITIONS
  // ============================================================================

  // ============================ FUEL BREAKS =============================
  const fuelBreaksLayer = new FeatureLayer({
    portalItem: {
      id: FUELBREAKS_LAYER_ITEM_ID
    },
    title: "Fuel Breaks",
    opacity: 1,
    visible: false,
    popupEnabled: true
  });

  // ============================ FUEL MANAGED AREAS =============================
  const fuelMngdLayer = new FeatureLayer({
    portalItem: {
      id: FUELMNG_LAYER_ITEM_ID
    },
    title: "Fuel Managed Areas",
    opacity: 1,
    visible: false,
    popupEnabled: true
  });

  // ============================ FIRE RISK CLASS =============================
  const fireRiskLayer = new FeatureLayer({
    portalItem: {
      id: RISKCLS_LAYER_ITEM_ID
    },
    title: "Wildfire Risk",
    opacity: 1,
    visible: false,
    popupEnabled: true
  });

  // ============================ FIRE THREAT CLASS =============================
  const fireThreatLayer = new FeatureLayer({
    portalItem: {
      id: THREATCLS_LAYER_ITEM_ID
    },
    title: "Wildfire PSTA Threat Class",
    opacity: 1,
    visible: false,
    popupEnabled: true
  });

  // ============================ FIRE FUELS =============================
  const fuelLayer = new FeatureLayer({
    portalItem: {
      id: FUELTYPES_LAYER_ITEM_ID
    },
    title: "Fire Fuels",
    opacity: 1,
    visible: false,
    popupEnabled: true
  });

  // ============================ FRONTERA FIRE LAYER =============================

    const fronteraRenderer = {
    type: "raster-stretch",
    stretchType: "min-max",
    statistics: [{
      min: 1,   
      max: 9,  
      avg: 0,
      stddev: 0
    }],
    dynamicRangeAdjustment: false,
    gamma: [0.4],
    colorRamp: createManualMultipartColorRamp(fronterathreatcolor)
  };

  const fronteraLayer = new ImageryTileLayer({
    portalItem: {
      id: FRONTERA_FIRE_ITEM_ID
    },
    title: "Frontera Fire Threat",
    renderer: fronteraRenderer,
    opacity: 1,
    visible: false
  });
  fronteraLayer._legendKey = "FronteraFireThreat";


  // ============================================================================
  //                        COMMUNITY POINTS LAYERS
  // ============================================================================

  // Small helper for rgba arrays
  // Keeps symbol configs readable
  function rgba(r, g, b, a = 1) {
    return [r, g, b, a];
  }

  // Wraps a symbol in a simple renderer
  // Used for single-symbol point layers
  function makeSimpleRenderer(symbol) {
    return {
      type: "simple",
      symbol
    };
  }

  // Builds a picture-marker symbol for SVG icons
  // yoffset can be used to anchor pins
  function makePictureMarkerSymbol({
    url,
    size = 18,
    yoffset = 0
  } = {}) {
    return {
      type: "picture-marker",
      url,
      width: size,
      height: size,
      yoffset
    };
  }

  // Creates a pin-style picture marker with bottom-center anchor
  function makePinMarker({
    url,
    size = 28
  } = {}) {
    return {
      type: "picture-marker",
      url,
      width: size,
      height: size,
      yoffset: size / 2
    };
  }

  // Renderer for critical infrastructure priority categories
  // Filters out Other/Unknown via definitionExpression on the layer
  function makeCriticalInfrastructureRenderer() {
    return {
      type: "unique-value",
      field: "Priority",
      uniqueValueInfos: [{
        value: "High",
        label: "High priority",
        symbol: makePinMarker({
          url: "svg/pin_red.svg",
          size: 22
        })
      },
      {
        value: "Medium",
        label: "Medium priority",
        symbol: makePinMarker({
          url: "svg/pin_yellow.svg",
          size: 22
        })
      },
      {
        value: "Low",
        label: "Low priority",
        symbol: makePinMarker({
          url: "svg/pin_green.svg",
          size: 22
        })
      }
      ]
    };
  }

  // ============================ CRITICAL INFRASTRUCTURE =============================
  const criticalInfrastructureLayer = new FeatureLayer({
    portalItem: {
      id: CRITICAL_ITEM_ID
    },
    layerId: 1,
    title: "RMOW Critical Infrastructure",
    visible: false,
    opacity: 1,
    popupEnabled: true,
    definitionExpression: "Priority IN ('High','Medium','Low')",
    renderer: makeCriticalInfrastructureRenderer(),
    minScale: 0,
    maxScale: 0
  });

  // ============================ POINTS OF INTEREST =============================
  const pointsOfInterestLayer = new FeatureLayer({
    portalItem: {
      id: POINTS_ITEM_ID
    },
    layerId: 5,
    title: "Points of Interest",
    visible: false,
    opacity: 1,
    popupEnabled: true,
    renderer: makeSimpleRenderer(makePinMarker({
      url: "svg/poi.svg",
      size: 22
    })),
    minScale: 0,
    maxScale: 0
  });

  // ============================ SCHOOLS =============================
  const schoolLayer = new FeatureLayer({
    portalItem: {
      id: POINTS_ITEM_ID
    },
    layerId: 6,
    title: "School",
    visible: false,
    opacity: 1,
    popupEnabled: true,
    renderer: makeSimpleRenderer(makePictureMarkerSymbol({
      url: "svg/school.svg",
      size: 20
    })),
    minScale: 0,
    maxScale: 0
  });

  // ============================ POLICE STATIONS =============================
  const policeStationLayer = new FeatureLayer({
    portalItem: {
      id: POINTS_ITEM_ID
    },
    layerId: 7,
    title: "Police Station",
    visible: false,
    opacity: 1,
    popupEnabled: true,
    renderer: makeSimpleRenderer(makePictureMarkerSymbol({
      url: "svg/police_station.svg",
      size: 20
    })),
    minScale: 0,
    maxScale: 0
  });

  // ============================ MEDICAL CENTRES =============================
  const medicalCentreLayer = new FeatureLayer({
    portalItem: {
      id: POINTS_ITEM_ID
    },
    layerId: 8,
    title: "Medical Centre",
    visible: false,
    opacity: 1,
    popupEnabled: true,
    renderer: makeSimpleRenderer(makePictureMarkerSymbol({
      url: "svg/hospital.svg",
      size: 20
    })),
    minScale: 0,
    maxScale: 0
  });

  // ============================ FIRE DEPARTMENTS =============================
  const fireDepartmentLayer = new FeatureLayer({
    portalItem: {
      id: POINTS_ITEM_ID
    },
    layerId: 9,
    title: "Fire Department",
    visible: false,
    opacity: 1,
    popupEnabled: true,
    renderer: makeSimpleRenderer(makePictureMarkerSymbol({
      url: "svg/firehall.svg",
      size: 20
    })),
    minScale: 0,
    maxScale: 0
  });

  // ============================================================================
  //                        ENVIRONMENTAL LAYER DEFINITIONS
  // ============================================================================

  // Priority Habitats: Priority = High | Very High
  function makePriorityHabitatsRenderer() {
    return {
      type: "unique-value",
      field: "Priority",
      uniqueValueInfos: [
        {
          value: "Very High",
          label: "Very High",
          symbol: {
            type: "simple-fill",
            color: [140, 0, 0, 0.45],       // tweak
            outline: { color: [60, 60, 60, 0.7], width: 1.0 }
          }
        },
        {
          value: "High",
          label: "High",
          symbol: {
            type: "simple-fill",
            color: [220, 80, 0, 0.40],      // tweak
            outline: { color: [60, 60, 60, 0.7], width: 1.0 }
          }
        }
      ],
      // Anything else (null/other strings) gets this symbol
      defaultSymbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0],
        outline: { color: [0, 0, 0, 0], width: 0 }
      },
      defaultLabel: "Other / not classified"
    };
  }



  const priorityHabitatsLayer = new FeatureLayer({
    portalItem: { id: PRIORITY_HABITATS_ITEM_ID },
    title: "Priority Habitats",
    opacity: 0.75,
    visible: false,
    popupEnabled: true, 
    definitionExpression: "Priority IN ('High','Very High')",
    renderer: makePriorityHabitatsRenderer() // FIX RENDERER
  });

  // const forestHabitatsLayer = new FeatureLayer({
  //   portalItem: { id: FOREST_HABITATS_ITEM_ID },
  //   title: "Forest Habitats",
  //   opacity: 0.5,
  //   visible: false,
  //   popupEnabled: true, // or false if you don't want clicks
  //   renderer: makeEnvPolygonRenderer(envForestGreen)
  // });

  // const grizzlyHabitatsLayer = new FeatureLayer({
  //   portalItem: { id: GRIZZLY_HABITATS_ITEM_ID },
  //   title: "Grizzly habitats",
  //   opacity: 0.5,
  //   visible: false,
  //   popupEnabled: true,
  //   renderer: makeEnvPolygonRenderer(envTanGreen)
  // });

  // const aquaticHabitatsLayer = new FeatureLayer({
  //   portalItem: { id: AQUATIC_HABITATS_ITEM_ID },
  //   title: "Aquatic habitats",
  //   opacity: 0.5,
  //   visible: false,
  //   popupEnabled: true,
  //   renderer: makeEnvPolygonRenderer(envTeal)
  // });

  // ============================ PARKS =============================
  const parksLayer = new FeatureLayer({
    portalItem: { id: PARKS_ITEM_ID },
    title: "Parks & Conservation Areas",
    opacity: 1,
    visible: false,
    popupEnabled: true
  });




  // ============================================================================
  //                        COMMUNITY CONTEXT LAYERS
  // ============================================================================

  // ============================ ROADS OVERLAY =============================
  // unused for now?
  const roadsLayer = new FeatureLayer({
    portalItem: {
      id: ROADS_ITEM_ID
    },
    title: "Roads Overlay",
    opacity: 1,
    visible: false,
    popupEnabled: false
  });

  // ============================ WB BOUNDARY =============================
  // Keep AGOL symbology by NOT providing a renderer.
  const wbBoundaryLayer = new FeatureLayer({
    portalItem: { id: WB_BOUNDARY_ITEM_ID },
    title: "Watershed Boundary",
    opacity: 1,
    visible: false,
    popupEnabled: false
  });

  // ============================ NEIGHBOURHOODS =============================
  const neighbourhoodsLayer = new FeatureLayer({
    portalItem: {
      id: NEIGHBOURHOOD_ITEM_ID
    },
    layerId: 12,
    title: "Neighbourhoods",
    opacity: 1,
    popupEnabled: true,
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0],
        outline: {
          color: [150, 150, 150, 1],
          width: 1
        }
      }
    },
    labelingInfo: [{
      labelExpressionInfo: {
        expression: "IIF($feature.ASSETNAME == 'Wedgewoods', 'Heliport', $feature.ASSETNAME)"
      },
      symbol: {
        type: "text",
        color: [80, 80, 80, 0.9],
        haloSize: 1,
        haloColor: [255, 255, 255, 0.9],
        font: {
          family: "sans-serif",
          size: 10,
          weight: "normal"
        }
      },
      labelPlacement: "always-horizontal"
    }],
    labelsVisible: true
  });

  // ============================ RMOW BOUNDARY =============================
  const rmowBoundaryLayer = new FeatureLayer({
    portalItem: {
      id: POINTS_ITEM_ID
    },
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

  // ============================ BUILDING FOOTPRINTS =============================
  const buildingsLayer = new FeatureLayer({
    portalItem: {
      id: BUILDINGS_ITEM_ID
    },
    title: "Building Footprints",
    opacity: 1,
    popupEnabled: false,
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0],
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

  // Builds a class-breaks renderer for a percentage field
  // Breaks are literal percentage values (0–100) used directly in labels
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
      classBreakInfos,
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

  // Shared popup template for all DA layers
  // Keep this in one place so fields stay consistent
  const vulnerabilityPopupTemplate = {
    title: "Dissemination Area",
    content: [{
      type: "fields",
      fieldInfos: [{
        fieldName: "__65_and_older",
        label: "Population 65+ (%)",
        format: {
          digitSeparator: true,
          places: 2
        }
      },
      {
        fieldName: "__0_to_4_years_old",
        label: "Children 0-4 (%)",
        format: {
          digitSeparator: true,
          places: 2
        }
      },
      {
        fieldName: "__lico",
        label: "Low Income Households (%)",
        format: {
          digitSeparator: true,
          places: 2
        }
      },
      {
        fieldName: "__renter",
        label: "Renters (%)",
        format: {
          digitSeparator: true,
          places: 2
        }
      },
      {
        fieldName: "__living_alone",
        label: "Living Alone (%)",
        format: {
          digitSeparator: true,
          places: 2
        }
      }
      ]
    }],
    outFields: ["*"]
  };

  // Config for each vulnerability toggle and its renderer
  // Add new variables here and they will auto-appear in the panel
  const vulnerabilityConfigs = [{
    id: "seniorVulnToggle",
    label: "Population 65+ (%)",
    field: "__65_and_older",
    breaks: [0, 5.3, 7.2, 8.1, 10.2, 17],
    colors: palPurples5,
    visible: false
  },
  {
    id: "youngVulnToggle",
    label: "Children 0-4 (%)",
    field: "__0_to_4_years_old",
    breaks: [0, 2.0, 2.4, 2.9, 3.9, 6.53],
    colors: palBlues5,
    visible: false
  },
  {
    id: "lowIncomeVulnToggle",
    label: "Low Income Households (%)",
    field: "__lico",
    breaks: [0, 2.0, 2.4, 2.9, 4.1, 6.53],
    colors: palReds5,
    visible: false
  },
  {
    id: "renterVulnToggle",
    label: "Renters (%)",
    field: "__renter",
    breaks: [0, 28.1, 37.4, 47.4, 57.2, 81.1],
    colors: palOranges5,
    visible: false
  },
  {
    id: "livingAloneVulnToggle",
    label: "Living Alone (%)",
    field: "__living_alone",
    breaks: [0, 8, 11, 13, 13.5, 17.3],
    colors: palGreens5,
    visible: false
  }
  ];

  // Invisible outline layer used for consistent DA popups
  // Leave this on so clicks always return values even if fill layers are off
  const vulnerabilityOutlineLayer = new FeatureLayer({
    portalItem: {
      id: VULNERABILITY_LAYER_ITEM_ID
    },
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
    popupTemplate: vulnerabilityPopupTemplate,
    outFields: ["*"]
  });

  // Creates one FeatureLayer per vulnerability config entry
  // Each layer has its own renderer and is toggled independently
  const vulnerabilityLayers = [];

  vulnerabilityConfigs.forEach(cfg => {
    const renderer = (cfg.breaks && cfg.colors) ?
      buildVulnerabilityRenderer(cfg.breaks, cfg.colors, cfg.field) :
      null;

    if (renderer) renderer.legendOptions = {
      title: " "
    };

    const layer = new FeatureLayer({
      portalItem: {
        id: VULNERABILITY_LAYER_ITEM_ID
      },
      title: cfg.label,
      renderer,
      opacity: 0.9,
      visible: cfg.visible,
      popupEnabled: false,
      popupTemplate: vulnerabilityPopupTemplate,
      outFields: ["*"]
    });

    cfg.layer = layer;
    vulnerabilityLayers.push(layer);
  });


  // ============================================================================
  //                        BUILD LAYERS AND TOGGLES
  // ============================================================================

  // Adds layers to the webmap in a controlled draw order
  // Points and labels go on top, then hazards, then vulnerability, then flood overlays
  const layerOrder = [
    referenceLayer,

    // points
    schoolLayer,
    policeStationLayer,
    medicalCentreLayer,
    fireDepartmentLayer,
    pointsOfInterestLayer,
    criticalInfrastructureLayer,

    // context
    neighbourhoodsLayer,
    wbBoundaryLayer,
    // roadsLayer,
    buildingsLayer,
    rmowBoundaryLayer,

    // hazards
    smokeLayer,
    rockfallLayer,
    debrisLayer,
    fuelBreaksLayer,
    fuelMngdLayer,
    fireRiskLayer,
    fireThreatLayer,
    fuelLayer,
    fronteraLayer,
    lstLayer,
    ndviLayer,

    // vulnerability
    ...vulnerabilityLayers,
    vulnerabilityOutlineLayer,

    // environmental
    parksLayer,
    priorityHabitatsLayer,
    // forestHabitatsLayer,
    // grizzlyHabitatsLayer,
    // aquaticHabitatsLayer,

    // flood
    dikesLayer,
    // floodExtentLayer,
    floodLayer,
    debrisFloodLayer
  ];

  webmap.addMany(layerOrder);


  // ============================================================================
  //                        MAP VIEW INITIALIZATION
  // ============================================================================

  // Creates the view and docks the popup
  // Uses flood layer extent as the initial camera target when available
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

  view.when().then(() => {
    const scaleBar = new ScaleBar({
      view,
      unit: "metric"
    });
    view.ui.add(scaleBar, "bottom-right");

    const bottomCenterContainer = document.createElement("div");
    bottomCenterContainer.className = "bottom-center-scalebar";
    view.ui.add(bottomCenterContainer, "manual");
    bottomCenterContainer.appendChild(scaleBar.container);

    floodLayer.when().then(() => {
      if (floodLayer.fullExtent) {
        view.goTo(floodLayer.fullExtent.expand(1.1)).catch(() => { });
      }
    }).catch((error) => {
      console.error("Flood layer failed to load:", error);
    });
  });

  // Optional hard reorder to match layerOrder exactly
  // Keeps the map stable if AGOL items load in a different order
  webmap.when().then(() => {
    layerOrder.forEach((layer, index) => {
      const position = webmap.layers.length - (index + 1);
      webmap.reorder(layer, position);
    });
  });


  // ============================================================================
  //                        UI MAPPINGS
  // ============================================================================

  // Defines the layer panel structure and toggle wiring
  // Items may control multiple layers when they are conceptually one toggle
  const uiMappings = [{
    category: "Community Context",
    items: [{
      id: "referenceToggle",
      layers: [referenceLayer],
      label: "Map Reference",
      hideFromLegend: true
    },
    {
      id: "buildingsToggle",
      layers: [buildingsLayer],
      label: "Building Footprints",
      hideFromLegend: true
    },
    {
      id: "neighbourhoodsToggle",
      layers: [neighbourhoodsLayer],
      label: "Neighbourhoods",
      hideFromLegend: true
    },
    // { id: "roadsToggle", layers: [roadsLayer], label: "Roads Overlay" },
    {
      id: "wbBoundaryToggle",
      layers: [wbBoundaryLayer],
      label: "Resort Recreation Area",
      hideFromLegend: true
    },
    {
      id: "criticalToggle",
      layers: [criticalInfrastructureLayer],
      label: "Critical Infrastructure"
    },
    {
      id: "poiToggle",
      layers: [pointsOfInterestLayer],
      label: "Points of Interest",
      legendStyle: "singleRow"
    },
    {
      id: "schoolToggle",
      layers: [schoolLayer],
      label: "Schools",
      legendStyle: "singleRow"
    },
    {
      id: "policeToggle",
      layers: [policeStationLayer],
      label: "Police Stations",
      legendStyle: "singleRow"
    },
    {
      id: "medicalToggle",
      layers: [medicalCentreLayer],
      label: "Medical Centres",
      legendStyle: "singleRow"
    },
    {
      id: "fireToggle",
      layers: [fireDepartmentLayer],
      label: "Fire Departments",
      legendStyle: "singleRow"
    }
    ]
  },
  {
    category: "Flooding",
    items: [{
      id: "dikesToggle",
      layers: [dikesLayer],
      label: "Flood Protection Dikes"
    },
    // {
    //   id: "floodExtentToggle",
    //   layers: [floodExtentLayer],
    //   label: "Flood Extent Outline"
    // },
    {
      id: "floodToggle",
      layers: [floodLayer],
      label: "Clear-water Flood Hazard (200-year event)"
    },
    {
      id: "debrisFloodToggle",
      layers: [debrisFloodLayer],
      label: "Debris Flood Hazard (200-year event)"
    }
    ]
  },
  {
    category: "Landslide",
    items: [{
      id: "rockfallToggle",
      layers: [rockfallLayer],
      label: "Rockfall Susceptibility"
    },
    {
      id: "debrisToggle",
      layers: [debrisLayer],
      label: "Debris Flow Susceptibility"
    }
    ]
  },
  {
    category: "Wildfire",
    items: [{
      id: "fuelBreakToggle",
      layers: [fuelBreaksLayer, fuelMngdLayer],
      label: "Fuel Breaks and Fire Managed Areas"
    },
    {
      id: "fireRiskToggle",
      layers: [fireRiskLayer],
      label: "Wildfire Risk Class ≥ Moderate"
    },
    {
      id: "fireThreatToggle",
      layers: [fireThreatLayer],
      label: "WUI Fire Threat Class ≥ 6"
    },
    {
      id: "fuelToggle",
      layers: [fuelLayer],
      label: "Fire Fuel Types"
    },
    {
      id: "fronteraToggle",
      layers: [fronteraLayer],
      label: "Frontera Fire Threat"
    }
    ]
  },
  {
    category: "Heat and Drought",
    items: [
      {
        id: "lstToggle",
        layers: [lstLayer],
        label: "Extreme Heat Hazard"
      },
      {
        id: "ndviToggle",
        layers: [ndviLayer],
        label: "Drought Susceptibility"
      }
    ]
  },
  {
    category: "Air Quality",
    items: [{
      id: "smokeToggle",
      layers: [smokeLayer],
      label: "3-year Smoke PM2.5 Exceedance Days"
    }]
  },
  {
    category: "Environmental",
    items: [
      {
        id: "parksToggle",
        layers: [parksLayer],
        label: "Parks & Conservation Areas"
      },
      {
        id: "priorityHabitatsToggle",
        layers: [priorityHabitatsLayer],
        label: "Priority Habitats",
        // legendStyle: "singleRow"
      },
      // {
      //   id: "forestHabitatsToggle",
      //   layers: [forestHabitatsLayer],
      //   label: "High Priority Forest Habitats",
      //   legendStyle: "singleRow"
      // },
      // {
      //   id: "grizzlyHabitatsToggle",
      //   layers: [grizzlyHabitatsLayer],
      //   label: "High Priority Grizzly Habitats",
      //   legendStyle: "singleRow"
      // },
      // {
      //   id: "aquaticHabitatsToggle",
      //   layers: [aquaticHabitatsLayer],
      //   label: "High Priority Aquatic Habitats",
      //   legendStyle: "singleRow"
      // }
    ]
  },
  {
    category: "Census Indicators",
    items: vulnerabilityConfigs.map(cfg => ({
      id: cfg.id,
      layers: [cfg.layer],
      label: cfg.label
    }))
  }
  ];


  // ============================================================================
  //                        ASSEMBLE
  // ============================================================================

  // Builds the toggle panel and wires listeners
  // Legend panel is derived from the same config
  renderLayerControls(uiMappings, "layerPanel");
  setupInfoListeners(uiMappings);
  renderLegendPanel(uiMappings);


});