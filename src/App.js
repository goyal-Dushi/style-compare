import React, { createContext } from "react";
import ButtonStyles from "./pages/Buttons";

export const TypeContext = createContext();

function App() {
  return (
    <TypeContext.Provider value={["M", "B"]}>
      <ButtonStyles />
    </TypeContext.Provider>
  );
}

export default App;
