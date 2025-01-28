import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "./Providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Router/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
