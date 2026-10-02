import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.jsx";
import Header from "./Header.jsx";
import Portfolio from "./Portfolio.jsx";
import About from "./About.jsx";
import Work from "./Work.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Portfolio />
    <About />
    <Work />
  </StrictMode>,
);
