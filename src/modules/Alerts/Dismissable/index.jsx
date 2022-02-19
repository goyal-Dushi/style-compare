import { useState, useRef } from "react";
import Interface from "../../../components/Interface";
import { htmlDismiss } from "../alertsHtml";
import MaterialAlertDismiss from "./Libs/MaterialAlertDismiss";
import BootstrapAlertDismiss from "./Libs/BootstrapAlertDismiss";
const { content } = require("../alerts.json");
const { descContent } = require("../../common.json");

export default function DismissAlert({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();

  const getHTML = () => {
    switch (type) {
      case "M":
        desc.current = content.dismissable.M;
        html.current = htmlDismiss.M;
        return <MaterialAlertDismiss />;
      case "B":
        desc.current = content.dismissable.B;
        html.current = htmlDismiss.B;
        return <BootstrapAlertDismiss />;
      default:
        desc.current = descContent.defaultText;
        return <></>;
    }
  };

  return (
    <>
      <Interface
        componentID={id}
        heading={"Dismiss Alert"}
        content={desc}
        setType={setType}
        setHtml={getHTML}
        codeData={html}
      />
    </>
  );
}
