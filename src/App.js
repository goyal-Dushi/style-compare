import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import styles from "./app.module.css";
import ButtonStyles from "./pages/Buttons";
import Alerts from "./modules/Alerts";
import Bootstrap from "./assets/img/bootstrap.png";
import Material from "./assets/img/material.png";
import Home from "./pages/Home";

export const TypeContext = createContext();

function App() {
  let navigate = useNavigate();
  return (
    <>
      <nav className={styles.header}>
        <p> {"style-compare"} </p>
      </nav>
      <div className={styles.bodyWrapper}>
        <aside className={styles.sideNav}>
          <ul className={styles.sideNavContent}>
            <li
              onClick={() => {
                navigate("/");
              }}>
              {"Home"}
            </li>
            <li
              onClick={() => {
                navigate("/buttons");
              }}>
              {"Buttons"}
            </li>
            <li
              onClick={() => {
                navigate("/alerts");
              }}>
              {"Alerts"}
            </li>
          </ul>
        </aside>
        <div className={styles.bodyContainer}>
          <TypeContext.Provider
            value={{ imgSrc: [Material, Bootstrap], value: ["M", "B"] }}>
            <div className={styles.mainContent}>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/buttons"} element={<ButtonStyles />} />
                <Route path={"/alerts"} element={<Alerts />} />
              </Routes>
            </div>
          </TypeContext.Provider>
        </div>
        <aside className={styles.sideNav}>
          <ul className={styles.sideNavContent}>
            <li> {"something1"} </li>
            <li> {"somethin2"} </li>
            <li> {"something3"} </li>
            <li> {"something4"} </li>
            <li> {"something5"} </li>
            <li> {"something1"} </li>
            <li> {"something5"} </li>
          </ul>
        </aside>
      </div>
      <footer className={styles.footerStyle}>Copyright Footer</footer>
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
