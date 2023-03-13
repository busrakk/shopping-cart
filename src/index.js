import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// context
import { BasketProvider } from "./contexts/BasketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BasketProvider>
      <App />
    </BasketProvider>
  </BrowserRouter>
);
