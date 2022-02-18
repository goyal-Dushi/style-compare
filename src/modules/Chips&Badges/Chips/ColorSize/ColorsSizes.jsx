import React, { useState, useCallback } from "react";
import CodeBox from "../../../../components/CodeBox";
import DescBox from "../../../../components/DescBox";
import DisplayBox from "../../../../components/DisplayBox";
import StyleToggleNav from "../../../../components/StyleToggleNav";
import BootstrapChipColorSize from "./Libs/BootstrapChipColorSize";
import MaterialChipColorSize from "./Libs/MaterialChipColorSize";
const { content, html } = require("../chips.json");
const { descContent } = require("../../../common.json");

export default function ColorsSizes({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.colorSizes.M;
      return <MaterialChipColorSize />;
    } else if (type === "B") {
      data = html.colorSizes.B;
      return <BootstrapChipColorSize />;
    }
  };

  const getContent = useCallback(() => {
    switch (type) {
      case "M":
        return content.colorSizes.M;
      case "B":
        return content.colorSizes.B;
      default:
        return descContent.defaultText;
    }
  }, [type]);

  return (
    <div id={id}>
      <DescBox heading={"Colors, Sizes & Variants"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
