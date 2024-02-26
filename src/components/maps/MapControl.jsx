import React from "react";
import {
  APIProvider,
  Map,
  Marker,
  AdvancedMarker,
  InfoWindow,
  Pin,
} from "@vis.gl/react-google-maps";
import { MapContent } from "./MapContent";
import { puntosCardinales } from "../../config/puntosCardinales.config";

export const MapControl = () => {
  const apiKey = import.meta.env.VITE_APP_APIKEY;
  const defaultZoom = 10;
  const defaultLat = 18.529930352593514;
  const defaultLng = -69.96623751238414;
  const defaultCenter = { lat: defaultLat, lng: defaultLng };

  return (
    <>
      <div className="container flex justify-center items-center p-5 mx-auto">
        <div className="w-[100em] h-[50em]">
          <APIProvider apiKey={apiKey}>
            <Map
              mapId={"mapa01"}
              defaultZoom={defaultZoom}
              defaultCenter={defaultCenter}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
            >
              <MapContent puntosCardinales={puntosCardinales} />
            </Map>
          </APIProvider>
        </div>
      </div>
    </>
  );
};
