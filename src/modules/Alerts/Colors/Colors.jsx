import React, { useState } from "react";
import StyleToggleNav from "../../../components/StyleToggleNav";
import DisplayBox from "../../../components/DisplayBox";
import CodeBox from "../../../components/CodeBox";
import DescBox from "../../../components/DescBox";
import MaterialAlertColors from "./Libs/MaterialAlertColors";
import BootstrapAlertColor from "./Libs/BootstrapAlertColor";
import { htmlColor } from "../alertsHtml";
const { content } = require("../alerts.json");
const { descContent } = require("../../common.json");

export default function AlertColors({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = htmlColor.M;
      return <MaterialAlertColors />;
    } else if (type === "B") {
      data = htmlColor.B;
      return <BootstrapAlertColor />;
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
      <DescBox heading={"Colors & Icons"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
