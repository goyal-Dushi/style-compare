import React, { createContext } from "react";
import ButtonStyles from "./pages/Buttons";
import Bootstrap from "./assets/img/bootstrap.png";
import Material from "./assets/img/material.png";

export const TypeContext = createContext();

function App() {
  return (
    <TypeContext.Provider
      value={{ imgSrc: [Material, Bootstrap], value: ["M", "B"] }}>
      <ButtonStyles />
    </TypeContext.Provider>
  );
}

export default App;
