import React, { createContext, lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";
import LeftSideNav from "./components/LeftSideNav";
import Bootstrap from "./assets/img/bootstrap.webp";
import Material from "./assets/img/material.webp";
import Loading from "./pages/Loader";
const Alerts = lazy(() => import("./pages/Alert"));
const ChipBadge = lazy(() => import("./pages/Chip&Badge"));
const Home = lazy(() => import("./pages/Home"));
const Progress = lazy(() => import("./pages/Progress"));
const Installation = lazy(() => import("./pages/Installation"));
const ButtonStyles = lazy(() => import("./pages/Buttons"));

export const TypeContext = createContext();

function App() {
  const [responsiveExpanded, setResponsiveExpanded] = useState(false);
  const toggleResponsiveNav = () => setResponsiveExpanded(!responsiveExpanded);
  
  useEffect(() => {
    document.title = "LibCompare";
  }, []);

  return (
    <>
      <NavHeader 
        toggleResponsiveNav={toggleResponsiveNav} 
        responsiveExpanded={responsiveExpanded}
      />
      <div className={"bodyWrapper"}>
        <LeftSideNav 
          responsiveExpanded={responsiveExpanded} 
          toggleResponsiveNav={toggleResponsiveNav}
        />
        <div className={"bodyContainer"}>
          <TypeContext.Provider
            value={{ imgSrc: [Material, Bootstrap], value: ["M", "B"] }}>
            <Routes>
              <Route
                path={"/"}
                element={
                  <Suspense fallback={<Loading component={"Home"} />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path={"/installation"}
                element={
                  <Suspense fallback={<Loading component={"Installation"} />}>
                    <Installation />
                  </Suspense>
                }
              />
              <Route
                path={"/chips&badges"}
                element={
                  <Suspense fallback={<Loading component={"Chips & Badges"} />}>
                    <ChipBadge />
                  </Suspense>
                }
              />
              <Route
                path={"/buttons"}
                element={
                  <Suspense fallback={<Loading component={"Button"} />}>
                    <ButtonStyles />
                  </Suspense>
                }
              />
              <Route
                path={"/alerts"}
                element={
                  <Suspense fallback={<Loading component={"Alert"} />}>
                    <Alerts />
                  </Suspense>
                }
              />
              <Route
                path={"/progress"}
                element={
                  <Suspense fallback={<Loading component={"Progress"} />}>
                    <Progress />
                  </Suspense>
                }
              />
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
