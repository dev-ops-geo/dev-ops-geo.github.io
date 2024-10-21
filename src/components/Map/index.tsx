import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Map, { NavigationControl, Layer, Source, ViewState, MapRef } from 'react-map-gl';
import axios from "axios";
import type GeoJSON from 'geojson';
import {adm0Layer, admin1Layer, admin1OutlineLayer, highlightLayer, prevalenceLayer} from './map-style';
import 'mapbox-gl/dist/mapbox-gl.css';
import { HiMap } from "react-icons/hi";
import CustomOverlay from './custom-overlay';
import { Button, Popover } from 'flowbite-react';
import { BaseMapComponent } from './basemap';
import { simplifyJson } from '../../utils';
import { FcPrevalenceLegend } from './legend';
import { HoverInfo } from './hoverinfo';
const MAPBOX_TOKEN = import.meta.env.VITE_APP_MAPBOX_TOKEN;

interface MapProps {
  initialLatitude: number;
  initialLongitude: number;
  zoom: number;
  updateCountryInfo: (countryInfo: any) => void;
}


const MapComponent: React.FC<MapProps> = ({ initialLatitude, initialLongitude, zoom, updateCountryInfo }) => {
  const [viewState, setViewState] = useState<ViewState>({
    latitude: initialLatitude,
    longitude: initialLongitude,
    zoom: zoom,
    bearing: 0,
    pitch: 0,
    padding: {top: 0, bottom: 0, left: 0, right: 0},
  });
  const [hoverInfo, setHoverInfo] = useState<any>(null);
  const [, setClickInfo] = useState(null);
  const [adminData, setAdminData] = useState<GeoJSON.FeatureCollection<GeoJSON.Geometry>>();
  const [admin1Data, setAdmin1Data] = useState<GeoJSON.FeatureCollection<GeoJSON.Geometry>>();
  const mapRef = useRef<MapRef>(null);
  const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/dark-v9");

  useEffect(() => {
    axios
      .get("./v2/adm0data.json")
      .then((res) => setAdminData(res.data.body))
      .catch((err) => console.log(err)); // eslint-disable-line
  }, []);

  const onHover = useCallback((event: any) => {
    
    const {
      features,
      point: {x, y},
    } = event;
    const hoveredFeature = features && features[0];
    // prettier-ignore
    setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
    
  }, []);

  const selectedCounty = (hoverInfo && hoverInfo.feature.properties.OBJECTID) || '';
  const filter = useMemo(() => ['in', 'OBJECTID', selectedCounty], [selectedCounty]);

  const onClick = useCallback((event: any) => {
    const {
      features,
      point: {x, y}
    } = event;
    const clickedFeature = features && features[0];
    let centroid = JSON.parse(clickedFeature.properties.centroid);
    mapRef.current?.flyTo({center: [centroid.longitude, centroid.latitude], duration: 500, zoom: 5});

    let adm0_id = clickedFeature.properties.adm0_id;
    axios
      .get("https://api.hungermapdata.org/v2/adm0/"+ adm0_id +"/adm1data.json")
      .then((res) => setAdmin1Data(simplifyJson(res.data, f => f.properties?.fcs.ratio)))
      .catch((err) => console.log(err));
    setClickInfo(clickedFeature && {feature: clickedFeature, x, y});
    updateCountryInfo(clickedFeature.properties);
  }, []);

  const mapStyleCallback = useCallback((newStyle: string) => {
    setMapStyle(newStyle);
  }, []);


  return (
    <Map
      {...viewState}
      ref={mapRef}
      style={{ width: '100%', height: '100vh' }}
      mapStyle={mapStyle}
      mapboxAccessToken={MAPBOX_TOKEN}
      onMove={evt => setViewState(evt.viewState)}
      interactiveLayerIds={['admin1-source', 'admin-source', 'admin-outline']}
      onMouseMove={onHover}
      onClick={onClick}
    >
      <NavigationControl style={{marginTop: 100,}} position="top-right" />
      <CustomOverlay position="top-right">
        <Popover content={<BaseMapComponent updateSource={mapStyleCallback}/>} trigger="click" placement="left">
          <Button color="light" size="xs">
            <HiMap className="h-3 w-3 text-black dark:text-white" />
          </Button>
        </Popover>
      </CustomOverlay>
      <Source
          id="mapbox-dem"
          type="raster"
          tiles={["https://static.hungermapdata.org/proteus_tiles/{z}/{x}/{y}.png"]}
          tileSize={256}
          maxzoom={20}
        />
      <Layer {...prevalenceLayer} />
      <Source type="geojson" data={adminData}>
        <Layer {...adm0Layer} />
        <Layer {...highlightLayer} filter={filter} />
      </Source>
      <Source type="geojson" data={admin1Data}>
        <Layer {...admin1Layer} />
        <Layer {...admin1OutlineLayer} />
      </Source>
      {hoverInfo  && (
          <HoverInfo hoverInfo={hoverInfo}/>
        )}
      <FcPrevalenceLegend mapStyle={mapStyle}/>
    </Map>
  ); 
};

export default MapComponent;