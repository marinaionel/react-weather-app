import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./MapContainer.css";
import ClickableMarker from "../../models/ClickableMarker";
import mapPoints from "../../constants/mapPoints";
import { useDispatch } from "react-redux";
import { setQuery } from "../../store/search/searchSlice";

const MapContainer: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mapContainer.current) {
      // default coordinates set to copenhagen
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [12.56, 55.67],
        zoom: 10,
      });

      map.on("load", function () {
        map.resize();
      });

      for (const feature of mapPoints) {
        const el = document.createElement("div");
        el.className = "marker";

        new ClickableMarker(el)
          .setLngLat(feature.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<p>${feature.description}</p>`
            )
          )
          .onClick(async () => {
            dispatch(setQuery(feature));
          })
          .addTo(map);
      }

      return () => map.remove();
    }
  });

  return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  );
};

export default MapContainer;
