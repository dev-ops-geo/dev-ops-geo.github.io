import type GeoJSON from 'geojson';

export function simplifyJson(featureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>, 
  accessor: (f: GeoJSON.Feature<GeoJSON.Geometry>) => number) : GeoJSON.FeatureCollection<GeoJSON.Geometry>{
  const { features } = featureCollection;
  return {
    type: "FeatureCollection",
    features: features.map((f: any) => {
      const value = accessor(f);
      const properties = {
        ...f.properties,
        value,
      };
      return { ...f, properties };
    }),
  };
}
