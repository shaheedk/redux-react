import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppRoute from "./components/topics/router/AppRoute.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoute />
  </StrictMode>
);
