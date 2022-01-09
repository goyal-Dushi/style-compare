import { useState } from "react";
import CodeBox from "../components/CodeBox";
import DescBox from "../components/DescBox";
import StyleToggleNav from "../components/StyleToggleNav";

export default function Installation() {
  const [type, setType] = useState("M");

  const getSnippet = () => {
    switch (type) {
      case "M":
        return `
    npm install @mui/material @emotion/react @emotion/styled

    yarn add @mui/material @emotion/react @emotion/styled
        `;
      case "B":
        return `
    npm install bootstrap

    yarn add bootstrap
            `;
      default:
        return "To be updated soon!";
    }
  };

  const getHeading = () => {
    switch (type) {
      case "M":
        return "Material";
      case "B":
        return "Bootstrap";
      default:
        return "";
    }
  };

  return (
    <div className="bodyContent">
      <h1 className={"display-4 fw-bold"}> {"Installation"} </h1>
      <DescBox
        heading={getHeading()}
        content={
          "You can use either yarn or npm, most popular node package manager libs to install such dependencies in your next React/Vue/Angular project."
        }
      />
      <StyleToggleNav setStyleType={setType} />
      <CodeBox snippet={getSnippet()} />
    </div>
  );
}
