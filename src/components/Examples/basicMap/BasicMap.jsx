import React, { useEffect, useState } from "react";
import { testPoints } from "../../../config/testPoints.config";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export const BasicMap = () => {
  const apiKey = import.meta.env.VITE_APP_APIKEY;
  const defaultZoom = 12;
  const defaultPosition = { lat: 18.529930352593514, lng: -69.96623751238414 };
  const [updateTestPoints, setUpdateTestPoints] = useState([]);

  useEffect(() => {
    setUpdateTestPoints([...testPoints]);
  }, []);

  const openInfoView = (id) => {
    const testPointTrue = updateTestPoints.map((info) =>
      info.id === id ? { ...info, infoView: true } : { ...info }
    );
    setUpdateTestPoints(testPointTrue);

    setTimeout(() => {
      const testPointFalse = copyTestPoints.map((info) =>
        info.id === id ? { ...info, infoView: false } : { ...info }
      );
      setUpdateTestPoints(testPointFalse);
    }, 500);
  };

  return (
    <>
      <div className="container flex justify-center items-center p-5 mx-auto">
        <div className="w-[100em] h-[50em]">
          <APIProvider apiKey={apiKey}>
            <Map
              mapId={"mapa01"}
              defaultZoom={defaultZoom}
              defaultCenter={defaultPosition}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
            >
              {updateTestPoints.map((points) => (
                <>
                  <AdvancedMarker
                    position={points.coord}
                    title={points.place}
                    key={points.id}
                    onClick={() => openInfoView(points.id)}
                  >
                    <div
                      style={{
                        cursor: "pointer",
                        width: 20,
                        height: 20,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        background: `${points.hexColor}`,
                        border: "2px solid #0e6443",
                        borderRadius: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    ></div>
                  </AdvancedMarker>
                  {points.infoView ? (
                    <InfoWindow position={points.coord} maxWidth={300}>
                      <div
                        className="text-black"
                        dangerouslySetInnerHTML={{ __html: points.htmlText }}
                      />
                    </InfoWindow>
                  ) : null}
                </>
              ))}
            </Map>
          </APIProvider>
        </div>
      </div>
    </>
  );
};
