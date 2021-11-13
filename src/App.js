import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import ButtonStyles from "./pages/Buttons";
import Alerts from "./pages/Alert";
import LeftSideNav from "./components/LeftSideNav";
import Bootstrap from "./assets/img/bootstrap.png";
import Material from "./assets/img/material.png";
import Home from "./pages/Home";

export const TypeContext = createContext();

function App() {
  return (
    <>
      <nav className={"header"}>
        <p> {"style-compare"} </p>
      </nav>
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
      </div>
      <footer className={"footerStyle"}>Copyright Footer</footer>
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
