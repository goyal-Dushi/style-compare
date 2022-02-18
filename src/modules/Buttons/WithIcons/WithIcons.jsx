import React, { useState } from "react";
import StyleToggleNav from "../../../components/StyleToggleNav";
import DisplayBox from "../../../components/DisplayBox";
import CodeBox from "../../../components/CodeBox";
import DescBox from "../../../components/DescBox";
import MaterialBtnIcon from "./Libs/MaterialBtnIcon";
import BootstrapBtnIcon from "./Libs/BootstrapBtnIcon";
const { content, html } = require("../buttons.json");
const { descContent } = require("../../common.json");

export default function WithIcons({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.icons.M;
      return <MaterialBtnIcon />;
    } else if (type === "B") {
      data = html.icons.B;
      return <BootstrapBtnIcon />;
    }
  };
  const getContent = () => {
    switch (type) {
      case "M":
        return content.icons.M;
      case "B":
        return content.icons.B;
      default:
        return descContent.defaultText;
    }
  };
  return (
    <div id={id}>
      <DescBox heading={"With Icons"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
