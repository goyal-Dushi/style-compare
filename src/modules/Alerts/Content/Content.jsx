import { useState } from "react";
import CodeBox from "../../../components/CodeBox";
import DisplayBox from "../../../components/DisplayBox";
import StyleToggleNav from "../../../components/StyleToggleNav";
import MaterialAlertContent from "./Libs/MaterialAlertContent";
import BootstrapAlertContent from "./Libs/BootstrapAlertContent";
import DescBox from "../../../components/DescBox";
import { htmlContent } from "../alertsHtml";
const { content } = require("../alerts.json");
const { descContent } = require("../../common.json");

export default function AdditionalContent({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = htmlContent.M;
      return <MaterialAlertContent />;
    } else if (type === "B") {
      data = htmlContent.B;
      return <BootstrapAlertContent />;
    }
  };

  const getContent = () => {
    switch (type) {
      case "M":
        return content.alertContent.M;
      case "B":
        return content.alertContent.B;
      default:
        return descContent.defaultText;
    }
  };

  return (
    <div id={id}>
      <DescBox heading={"Additional Content"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
