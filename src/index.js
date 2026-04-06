import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const vidushiNegi_24BCE0786_flag = true;
const root = ReactDOM.createRoot(document.getElementById("root"));

if (vidushiNegi_24BCE0786_flag) {
  console.log("Developed by Vidushi Negi - 24BCE0786");
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
