import React, { useEffect } from "react";

export const PolygonMap = () => {
  const defaultZoom = 12;
  const defaultLat = 18.454224846456622;
  const defaultLng = -69.94580194399846;
  const defaultCenter = { lat: defaultLat, lng: defaultLng };

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: defaultZoom,
      center: defaultCenter,
      mapTypeId: "terrain",
    });

    const randomCoords = [
      { lat: 18.505196671962942, lng: -69.97207538520948 },
      { lat: 18.494245455536447, lng: -69.99488259412273 },
      { lat: 18.46960265911436, lng: -69.99690348605176 },
      { lat: 18.483293538937918, lng: -69.94450464532066 },
      { lat: 18.507113062824672, lng: -69.93569933048705 },
      { lat: 18.505196671962942, lng: -69.97207538520948 },
    ];

    const randomPlace = new window.google.maps.Polygon({
      paths: randomCoords,
      strokeColor: "#4287f5",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#4287f5",
      fillOpacity: 0.35,
    });

    const bellaVistaCoords = [
      { lat: 18.45471417080236, lng: -69.95454040496429 },
      { lat: 18.46231328891844, lng: -69.9360902022238 },
      { lat: 18.454886881768104, lng: -69.93008174804184 },
      { lat: 18.445732961205536, lng: -69.9498064713664 },
      { lat: 18.45471417080236, lng: -69.95454040496429 },
    ];

    const bellaVista = new window.google.maps.Polygon({
      paths: bellaVistaCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });

    randomPlace.setMap(map);
    bellaVista.setMap(map);
  };

  useEffect(() => {
    initMap();
  }, []);

  return (
    <>
      <div className="container flex justify-center items-center p-5 mx-auto">
        <div id="map" className="w-[100em] h-[50em]" />
      </div>
    </>
  );
};
