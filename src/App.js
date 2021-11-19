import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonStyles from "./pages/Buttons";
import Alerts from "./pages/Alert";
import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";
import LeftSideNav from "./components/LeftSideNav";
import Bootstrap from "./assets/img/bootstrap.png";
import Material from "./assets/img/material.png";
import Home from "./pages/Home";

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
              <Route path={"/buttons"} element={<ButtonStyles />} />
              <Route path={"/alerts"} element={<Alerts />} />
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
