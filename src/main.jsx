import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Router/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
