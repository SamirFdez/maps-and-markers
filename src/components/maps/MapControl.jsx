import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Loading } from "../loading/Loading";
import { MapContent } from "./MapContent";
import { puntosCardinales } from "../../config/puntosCardinales.config";

export const MapControl = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const deviceId = import.meta.env.VITE_APP_DEVICEID;
  const appId = import.meta.env.VITE_APP_APPID;
  const procId = import.meta.env.VITE_APP_PROCID;
  const apiKey = import.meta.env.VITE_APP_APIKEY;
  const defaultZoom = 8;
  const defaultLat = 18.529930352593514;
  const defaultLng = -69.96623751238414;
  const defaultCenter = { lat: defaultLat, lng: defaultLng };

  const [cardinalPoints, setCardinalPoints] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getCardinalPoints = async () => {
    try {
      const response = await axios.get(
        baseUrl + deviceId + appId + procId,
        { Pagina: currentPage },
        config
      );
      setCardinalPoints(response.data[0].Registros);
      setTotalPages(response.data[0].Paginas);
      setCurrentPage(response.data[0].Pagina);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los puntos cardinales", error);
      setLoading(true);
    }
  };

  const getCardinalPointsLoot = async () => {
    try {
      if (currentPage < 2) {
        const response = await axios.post(
          baseUrl + deviceId + appId + procId,
          { Pagina: currentPage + 1 }, // Enviamos la siguiente página
          config
        );
        setCardinalPoints((prevData) => [
          ...prevData,
          ...response.data[0].Registros,
        ]);
        setCurrentPage(currentPage + 1); // Actualizamos la página actual
      }
    } catch (error) {
      console.error(
        "Error al obtener los puntos cardinales de la siguiente página",
        error
      );
    }
  };

  useEffect(() => {
    getCardinalPoints();
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     getCardinalPointsLoot();
  //   }, 1000);
  // }, [currentPage, totalPages]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                <MapContent cardinalPoints={cardinalPoints} />
              </Map>
            </APIProvider>
          </div>
        </div>
      )}
    </>
  );
};
