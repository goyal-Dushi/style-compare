import React, { useState } from "react";
import CodeBox from "../../../../components/CodeBox";
import DescBox from "../../../../components/DescBox";
import DisplayBox from "../../../../components/DisplayBox";
import StyleToggleNav from "../../../../components/StyleToggleNav";
import BootstrapBadge from "./Libs/BootstrapBadge";
import MaterialBadge from "./Libs/MaterialBadge";
const { content, html } = require("../badges.json");
const { descContent } = require("../../../common.json");

function AlignmentContent({ id }) {
  const [type, setType] = useState("M");

  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.alignContent.M;
      return <MaterialBadge />;
    } else if (type === "B") {
      data = html.alignContent.B;
      return <BootstrapBadge />;
    }
  };

  const getContent = () => {
    switch (type) {
      case "M":
        return content.alignContent.M;
      case "B":
        return content.alignContent.B;
      default:
        return descContent.defaultText;
    }
  };

  return (
    <div id={id}>
      <DescBox heading={"Alignment & Content"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}

export default AlignmentContent;
