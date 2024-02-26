import React from "react";
import {
  APIProvider,
  Map,
  Marker,
  AdvancedMarker,
  InfoWindow,
  Pin,
} from "@vis.gl/react-google-maps";
export const ExampleMap = () => {
  const apiKey = import.meta.env.VITE_APP_APIKEY;
  const position = { lat: 18.529930352593514, lng: -69.96623751238414 };

  const home = { lat: 18.495044914571697, lng: -69.81039967971275 };
  const juniorHome = { lat: 18.46867062509826, lng: -69.88988527544812 };

  return (
    <>
      <div className="container flex justify-center items-center p-5 mx-auto">
        <div className="w-[100em] h-[50em]">
          <APIProvider apiKey={apiKey}>
            <Map
              mapId={"mapa01"}
              defaultZoom={10}
              defaultCenter={position}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
            >
              <AdvancedMarker
                position={juniorHome}
                title={"AdvancedMarker with custom html content."}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    background: "#22ccff",
                    border: "2px solid #22ccff",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
              </AdvancedMarker>
              <AdvancedMarker
                position={home}
                title={"AdvancedMarker with customized pin."}
              >
                <Pin
                  background={"#22ccff"}
                  borderColor={"#1e89a1"}
                  glyphColor={"#0f677a"}
                ></Pin>
              </AdvancedMarker>

              <AdvancedMarker
                position={home}
                title={"AdvancedMarker with custom html content."}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    background: "#1dbe80",
                    border: "2px solid #0e6443",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
              </AdvancedMarker>

              <InfoWindow position={home} maxWidth={300}>
                <p>My home</p>
              </InfoWindow>
              <InfoWindow position={juniorHome} maxWidth={300}>
                <p>Junior's home</p>
              </InfoWindow>
            </Map>
          </APIProvider>
        </div>
      </div>
    </>
  );
};
