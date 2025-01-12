import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
