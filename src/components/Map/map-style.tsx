import type {LayerProps, FillLayer} from 'react-map-gl';

export const prevalenceLayer: LayerProps = {
  id: "fc_prev_layer",
  type: "raster",
  source: "mapbox-dem"
}

export const adm0Layer: LayerProps = {
  id: 'admin-source',
  type: 'fill',
  paint: {
    'fill-outline-color': '#0040c8',
    'fill-color': '#fff',
    'fill-opacity': 0
  }
};

export const admin1Layer: LayerProps = {
  id: 'admin1-source',
  type: 'fill',
  paint: {
    'fill-outline-color': '#fff',
    'fill-color': {
      property: 'value',
      stops: [
        [5, '#29563a'],
        [10, '#73b358'],
        [20, '#cbcc58'],
        [30, '#d5a137'],
        [40, '#eb5a26'],
        [50, '#d3130c'],
      ]},
    'fill-opacity': 0.75
  }
};

export const admin1OutlineLayer: LayerProps = {
  id: 'admin-outline',
  type: 'line',
  source: 'admin1-source',
  layout: {},
  paint: {
    'line-color': '#fff',
    'line-width': 3
  }
}

// Highlighted administrative polygons
export const highlightLayer: FillLayer = {
  id: 'admin-highlighted',
  type: 'fill',
  source: 'admin-source',
  paint: {
    'fill-outline-color': '#484896',
    'fill-color': '#fff',
    'fill-opacity': 0.2
  }
};