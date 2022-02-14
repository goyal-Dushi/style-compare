import React, { useState } from "react";
import DescBox from "../../../components/DescBox";
import CodeBox from "../../../components/CodeBox";
import DisplayBox from "../../../components/DisplayBox";
import StyleToggleNav from "../../../components/StyleToggleNav";
import MaterialButtonColors from "./Libs/MaterialButtonColors";
import BootstrapButtonColors from "./Libs/BootstrapButtonColors";

const { content, html } = require("../buttons.json");
const { descContent } = require("../../common.json");

function ButtonColors({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.colors.M;
      return <MaterialButtonColors />;
    } else if (type === "B") {
      data = html.colors.B;
      return <BootstrapButtonColors />;
    }
  };

  const getContent = () => {
    switch (type) {
      case "M":
        return content.colors.M;
      case "B":
        return content.colors.B;
      default:
        return descContent.defaultText;
    }
  };

  return (
    <div id={id}>
      <DescBox heading={"Color"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox>{getHTML()}</DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}

export default ButtonColors;
