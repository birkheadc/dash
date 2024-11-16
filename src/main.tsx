import React from "react";
import ReactDOM from "react-dom/client";

import "./localization/i18n";
import "./styles/main.css";

import "react-toastify/dist/ReactToastify.css";

import App from "./app/App";
import { z } from "zod";
import Modal from "react-modal";
import declareModalStyles from "./modalStyles";

import zodCustomErrorMap from "./zodErrorMap";

z.setErrorMap(zodCustomErrorMap);

Modal.setAppElement("#root");
declareModalStyles(Modal);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
