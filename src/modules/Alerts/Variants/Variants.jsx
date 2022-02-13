import React, { useState } from "react";
import CodeBox from "../../../components/CodeBox";
import DisplayBox from "../../../components/DisplayBox";
import StyleToggleNav from "../../../components/StyleToggleNav";
import DescBox from "../../../components/DescBox";
import { htmlVariants } from "../alertsHtml";
import MaterialAlertVariants from "./Libs/MaterialAlertVariants";
import BootstrapAlertVariants from "./Libs/BootstrapAlertVariants";
const { content } = require("../alerts.json");
const { descContent } = require("../../common.json");

export default function AlertVariants({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = htmlVariants.M;
      return <MaterialAlertVariants />;
    } else if (type === "B") {
      data = htmlVariants.B;
      return <BootstrapAlertVariants />;
    }
  };

  const getContent = () => {
    switch (type) {
      case "M":
        return content.variants.M;
      case "B":
        return content.variants.B;
      default:
        return descContent.defaultText;
    }
  };

  return (
    <div id={id}>
      <DescBox heading={"Variants"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
