import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonStyles from "./pages/Buttons";
import Alerts from "./pages/Alert";
import ChipBadge from "./pages/Chip&Badge";
import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";
import LeftSideNav from "./components/LeftSideNav";
import Bootstrap from "./assets/img/bootstrap.webp";
import Material from "./assets/img/material.webp";
import Home from "./pages/Home";
import Progress from "./pages/Progress";
import Installation from "./pages/Installation";

export const TypeContext = createContext();

function App() {
  return (
    <>
      <NavHeader />
      <div className={"bodyWrapper"}>
        <LeftSideNav />
        <div className={"bodyContainer"}>
          <TypeContext.Provider
            value={{ imgSrc: [Material, Bootstrap], value: ["M", "B"] }}>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/installation"} element={<Installation />} />
              <Route path={"/chips&badges"} element={<ChipBadge />} />
              <Route path={"/buttons"} element={<ButtonStyles />} />
              <Route path={"/alerts"} element={<Alerts />} />
              <Route path={"/progress"} element={<Progress />} />
            </Routes>
          </TypeContext.Provider>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
