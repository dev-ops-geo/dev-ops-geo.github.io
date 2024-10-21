import type {LayerProps, FillLayer} from 'react-map-gl';

export const countryLayer: LayerProps = {
  id: "country_layer",
  type: "raster",
  source: "mapbox-dem"
}

export const dataLayer: LayerProps = {
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
    'fill-color': 'rgb(211, 19, 12)',
    'fill-opacity': 0.75
  }
};

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