import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        ${emotionReset}
      `}
    />
    <App />
  </React.StrictMode>
);
