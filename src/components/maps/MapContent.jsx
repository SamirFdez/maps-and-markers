import React, { useState, useEffect, useRef } from "react";
import { useMap, AdvancedMarker } from "@vis.gl/react-google-maps";
import { MarkerClusterer, DefaultRenderer } from "@googlemaps/markerclusterer";
import { MarkerUtils } from "@googlemaps/markerclusterer";

export const MapContent = ({ puntosCardinales }) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);
  const totalMarkers = 12;

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map, DefaultRenderer });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {puntosCardinales.map((puntos) => (
        <AdvancedMarker
          position={puntos}
          key={puntos.id}
          ref={(marker) => setMarkerRef(marker, puntos.id)}
        >
          <div
            style={{
              width: 20,
              height: 20,
              position: "absolute",
              top: 0,
              left: 0,
              background: "#FA64FF",
              border: "2px solid #FA64FF",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </AdvancedMarker>
      ))}
    </>
  );
};
