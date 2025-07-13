import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { HashRouter } from "react-router-dom";
import AdminContextProvider from "./context/AdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AdminContextProvider>
      <App />
    </AdminContextProvider>
  </HashRouter>
);
