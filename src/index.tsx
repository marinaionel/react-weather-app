import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Provider } from "react-redux";
import { store } from "./store/store";
import "@fontsource/inter";
import "mapbox-gl/dist/mapbox-gl.css";
import { CssVarsProvider } from "@mui/joy";
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import localizedFormat from 'dayjs/plugin/localizedFormat';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY!;

dayjs.extend(localizedFormat)
dayjs.extend(utc)
dayjs.extend(timezone)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssVarsProvider>
        <App />
      </CssVarsProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
