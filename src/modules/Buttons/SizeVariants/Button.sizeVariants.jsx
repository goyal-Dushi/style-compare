import React, { useState } from "react";
import CodeBox from "../../../components/CodeBox";
import DisplayBox from "../../../components/DisplayBox";
import StyleToggleNav from "../../../components/StyleToggleNav";

import DescBox from "../../../components/DescBox";
import MaterialSizVarButton from "./Libs/MaterialSizVarButton";
import BootstrapSizVarButton from "./Libs/BootstrapSizVarButton";
const { content, html } = require("../buttons.json");
const { descContent } = require("../../common.json");

export default function ButtonSizeVariants({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.sizeVariants.M;
      return <MaterialSizVarButton />;
    } else if (type === "B") {
      data = html.sizeVariants.B;
      return <BootstrapSizVarButton />;
    }
  };

  const getContent = () => {
    switch (type) {
      case "M":
        return content.sizeVariants.M;
      case "B":
        return content.sizeVariants.B;
      default:
        return descContent.defaultText;
    }
  };

  return (
    <div id={id}>
      <DescBox heading={"Sizes & Variants"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox>{getHTML()}</DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
