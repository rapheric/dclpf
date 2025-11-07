// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client"; // Correct for React 18+
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";

// Make sure there is an element with id="root" in index.html
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
