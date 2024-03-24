import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkModeContextProvider } from "./context/darkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <authProvider>
      <App />
    </authProvider>
  </DarkModeContextProvider>
);
