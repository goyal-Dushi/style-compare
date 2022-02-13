import { useState } from "react";
import CodeBox from "../../../components/CodeBox";
import DisplayBox from "../../../components/DisplayBox";
import StyleToggleNav from "../../../components/StyleToggleNav";
import DescBox from "../../../components/DescBox";
import { htmlDismiss } from "../alertsHtml";
import MaterialAlertDismiss from "./Libs/MaterialAlertDismiss";
import BootstrapAlertDismiss from "./Libs/BootstrapAlertDismiss";
const { content } = require("../alerts.json");
const { descContent } = require("../../common.json");

export default function DismissAlert({ id }) {
  const [type, setType] = useState("M");

  let data = "";
  const getHTML = () => {
    if (type === "M") {
      data = htmlDismiss.M;
      return <MaterialAlertDismiss />;
    } else if (type === "B") {
      data = htmlDismiss.B;
      return <BootstrapAlertDismiss />;
    }
  };

  const getContent = () => {
    switch (type) {
      case "M":
        return content.dismissable.M;
      case "B":
        return content.dismissable.B;
      default:
        return descContent.defaultText;
    }
  };

  return (
    <div id={id}>
      <DescBox heading={"Dismiss Alert"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
