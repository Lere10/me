import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./blocks/page.css";
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App className="page" />
  </StrictMode>
);
